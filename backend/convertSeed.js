import fs from 'fs';

// Brand ID mapping
const BRAND_IDS = {
    "Bluestar": "693e937d904d600084688852",
    "ByronBay": "693e937d904d600084688853",
    "Chobani": "693e937d904d600084688854",
    "Compartes": "693e937d904d600084688855",
    "Graze": "693e937d904d600084688856",
    "KrispyKreme": "693e937d904d600084688857",
    "Laduree": "693e937d904d600084688858",
    "Olipop": "693e937d904d600084688859",
    "Sugarfina": "693e937d904d60008468885a",
    "SweetsParadise": "693e937d904d60008468885b",
    "TeaForte": "693e937d904d60008468885c",
};

// Read the old seed.js file
const oldSeedContent = fs.readFileSync('./seed.js', 'utf8');

// Replace brandName with brand ObjectId for each brand
let newSeedContent = oldSeedContent;

Object.entries(BRAND_IDS).forEach(([brandName, brandId]) => {
    // Replace pattern: brandName: "BrandName", brandImage: "url",
    // With: brand: "ObjectId",
    const oldPattern = new RegExp(
        `brandName: "${brandName}",\\s*brandImage: "https://[^"]+",`,
        'g'
    );
    const newPattern = `brand: "${brandId}",`;

    newSeedContent = newSeedContent.replace(oldPattern, newPattern);
});

// Write the new seed file
fs.writeFileSync('./seed_updated.js', newSeedContent);

console.log('✅ Conversion complete!');
console.log('📄 New file created: seed_updated.js');
console.log('\nNext steps:');
console.log('1. Review seed_updated.js');
console.log('2. Backup your old seed.js: mv seed.js seed_old.js');
console.log('3. Rename the new file: mv seed_updated.js seed.js');
console.log('4. Run: node seed.js');
