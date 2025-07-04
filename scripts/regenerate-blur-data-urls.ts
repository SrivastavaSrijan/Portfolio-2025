import p from 'payload';
import config from '../src/payload.config.js';
/**
 * Script to regenerate blur data URLs for existing images
 * This will update all media items that don't have a blurDataURL
 */
async function regenerateBlurDataURLs() {
  console.debug('🚀 Starting blur data URL regeneration...');

  const payload = await p.init({
    config: config,
  });

  try {
    // Get all media items that don't have a blurDataURL
    const { docs: mediaItems } = await payload.find({
      collection: 'media',
      where: {
        and: [
          {
            mimeType: {
              like: 'image/%',
            },
          },
        ],
      },
      limit: 1000, // Process in batches
    });

    console.debug(`📁 Found ${mediaItems.length} images without blur data URLs`);

    if (mediaItems.length === 0) {
      console.debug('✅ All images already have blur data URLs!');
      return;
    }

    let processed = 0;
    const errors: Array<{ id: number; filename: string; error: string }> = [];

    // Process each image
    for (const media of mediaItems) {
      try {
        console.debug(`📷 Processing: ${media.filename} (${processed + 1}/${mediaItems.length})`);

        if (!media.url) {
          console.warn(`⚠️  Skipping ${media.filename}: no URL available`);
          continue;
        }

        // Fetch the image
        const response = await fetch(`${process.env.BASE_URL}${media.url}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const buffer = Buffer.from(await response.arrayBuffer());

        // Import the blur generation function (simple version)
        const { generateBlurDataURLFromBuffer } = await import(
          '../src/lib/payload/utils/generateBlurDataURLHook.js'
        );
        const blurDataURL = await generateBlurDataURLFromBuffer(buffer);

        if (blurDataURL) {
          // Update the media item
          await payload.update({
            collection: 'media',
            id: media.id,
            data: {
              blurDataURL,
            },
          });

          console.debug(`✅ Updated ${media.filename}`);
        } else {
          console.warn(`⚠️  Failed to generate blur for ${media.filename}`);
        }

        processed++;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(`❌ Error processing ${media.filename}:`, errorMessage);
        errors.push({
          id: media.id,
          filename: media.filename || 'unknown',
          error: errorMessage,
        });
      }
    }

    console.debug('\n📊 Summary:');

    console.debug(`✅ Successfully processed: ${processed}`);

    console.debug(`❌ Errors: ${errors.length}`);

    if (errors.length > 0) {
      console.debug('\n❌ Failed items:');
      errors.forEach(({ filename, error }) => {
        console.debug(`  - ${filename}: ${error}`);
      });
    }

    console.debug('\n🎉 Blur data URL regeneration complete!');
  } catch (error) {
    console.error('💥 Fatal error during regeneration:', error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
}

// Run the script
regenerateBlurDataURLs().catch((error) => {
  console.error('💥 Script failed:', error);
  process.exit(1);
});
