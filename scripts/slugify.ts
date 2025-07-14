import p from 'payload';
import config from '../src/payload.config';
import lodash from 'lodash';

/** We need a better way to do this man. */
async function slugifyTags() {
  const payload = await p.init({
    config: config,
  });
  const { docs: tags } = await payload.find({
    collection: 'tags',
    limit: 1000, // Adjust as needed
  });

  const promises = tags.map(async (tag) => {
    const slug = lodash.kebabCase(tag.name);
    console.debug(`Updating tag ${tag.name} with slug ${slug}`);
    return payload.update({
      collection: 'tags',
      id: tag.id,
      data: { slug },
    });
  });

  try {
    await Promise.all(promises);
  } catch (error) {
    console.error('Error slugifying tags:', error);
  }
}

slugifyTags()
  .then(() => {
    console.debug('✅ All tags have been slugified');
  })
  .catch((error) => {
    console.error('❌ Failed to slugify tags:', error);
    process.exit(1);
  });
