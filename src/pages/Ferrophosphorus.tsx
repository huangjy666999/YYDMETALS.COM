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
        description: 'YYD METALS supplies ferrophosphorus in standard, low-titanium and high-purity qualities. The material is produced from carefully controlled furnace operations and is available in lump and crushed sizes for flexible charging into furnaces and ladles.',
        applications: [
          'Phosphorus addition in specialty steel grades',
          'Improving fluidity and castability in cast iron',
          'Wear-resistant and high-phosphorus casting applications',
          'Deoxidizer in certain metallurgical processes',
          'Raw material for phosphate and chemical applications',
        ],
        specs: {
          title: 'Ferrophosphorus - Chemical Composition',
          intro: 'Standard, low-titanium and high-purity grades. Custom specifications are available on request.',
          headers: ['Grade', 'P', 'Si', 'C', 'S', 'Mn', 'Ti'],
          rows: [
            ['FeP 25%',                      '25–28%', '≤ 2%',   '≤ 0.5%',  '≤ 0.5%',  '≤ 3%',   ''],
            ['FeP 20%',                      '20–23%', '≤ 5%',   '≤ 1.0%',  '≤ 0.5%',  '≤ 5%',   ''],
            ['Low-Titanium Ferrophosphorus', '20–23%', '≤ 2%',   '< 0.5%',  '< 0.1%',  '< 2%',   '< 0.05%'],
            ['High-Purity Ferrophosphorus',  '17–23%', '< 0.5%', '0.05%',   '< 0.05%', '< 0.5%', '< 0.02%'],
          ],
          footnote: 'P: phosphorus content range. All other elements: maximum content. Ti is the controlled element in the low-titanium and high-purity grades.',
        },
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
        ],
      }}
    />
  )
}
