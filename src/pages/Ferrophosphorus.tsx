import ProductPage from '../components/ProductPage'
import { images } from '../lib/images'

export default function Ferrophosphorus() {
  return (
    <ProductPage
      data={{
        name: 'Ferrophosphorus',
        bannerImg: images.ferrophosphorus1,
        featureImg: images.ferrophosphorusHighPurity1,
        tagline: 'Phosphorus-bearing iron alloy for specialty metallurgy and casting.',
        intro: 'Ferrophosphorus is an alloy of iron and phosphorus used primarily as a phosphorus additive in steelmaking and cast iron production. It improves fluidity, wear resistance, and specific machinability characteristics.',
        description: 'YYD METALS supplies ferrophosphorus in standard and custom phosphorus contents. The material is produced from carefully controlled furnace operations and is available in lump and crushed sizes for flexible charging into furnaces and ladles.',
        applications: [
          'Phosphorus addition in specialty steel grades',
          'Improving fluidity and castability in cast iron',
          'Wear-resistant and high-phosphorus casting applications',
          'Deoxidizer in certain metallurgical processes',
          'Raw material for phosphate and chemical applications',
        ],
        grades: [
          { grade: 'FeP 25%', composition: 'P 23–28%, Si ≤ 5%, C ≤ 1.0%, S ≤ 0.5%, Mn ≤ 2%' },
          { grade: 'FeP 20%', composition: 'P 18–23%, Si ≤ 5%, C ≤ 1.0%, S ≤ 0.5%, Mn ≤ 2%' },
          { grade: 'FeP 15%', composition: 'P 14–18%, Si ≤ 5%, C ≤ 1.0%, S ≤ 0.5%, Mn ≤ 2%' },
        ],
        packaging: [
          '1 MT big bags on pallets',
          '50 kg woven bags',
          'Bulk in containers',
          'Custom sizing on request',
        ],
        gallery: [
          images.ferrophosphorus1,
          images.ferrophosphorus2,
          images.ferrophosphorus3,
          images.ferrophosphorusLump,
          images.ferrophosphorusHighPurity1,
          images.ferrophosphorusHighPurity2,
        ],
      }}
    />
  )
}
