import ProductPage from '../components/ProductPage'
import { images } from '../lib/images'

export default function Ferrosilicon() {
  return (
    <ProductPage
      data={{
        name: 'Ferrosilicon',
        bannerImg: images.ferrosilicon,
        featureImg: images.ferrosiliconHighGrade,
        tagline: 'Deoxidation and alloying alloy for steel and cast iron production.',
        intro: 'Ferrosilicon is an alloy of iron and silicon, widely used as a deoxidizer and alloying element in steelmaking and cast iron production. It improves strength, hardness, and magnetic properties.',
        description: 'YYD METALS supplies ferrosilicon in multiple silicon contents, from foundry grades to high-purity low-titanium grades for specialty applications. Material is available in lump, crushed, and powder forms to suit different furnace and process requirements.',
        applications: [
          'Deoxidation of molten steel in basic oxygen and electric arc furnaces',
          'Alloying agent for silicon-bearing steels and electrical steels',
          'Inoculant for cast iron to promote graphite formation',
          'Dense medium separation in mineral processing',
          'Production of silicon-rich specialty alloys',
        ],
        specs: {
          title: 'High-Purity Ferrosilicon - Chemical Composition',
          intro: 'Grade designations follow the GC FeSi75Ti series. Values are maximum contents in percent by mass unless stated otherwise. Custom specifications are available on request.',
          headers: ['Grade', 'Si', 'Ti', 'C', 'Al', 'P', 'S', 'Mn', 'Cr', 'Ca', 'V', 'Ni', 'B'],
          rows: [
            ['GC FeSi75Ti0.01-A',   '75.0', '0.010', '0.012', '0.01',  '0.010', '0.010', '0.1', '0.1', '0.01',  '0.010', '0.02', '0.002'],
            ['GC FeSi75Ti0.01-B',   '75.0', '0.010', '0.015', '0.03',  '0.015', '0.010', '0.2', '0.1', '0.03',  '0.020', '0.03', '0.005'],
            ['GC FeSi75Ti0.015-A',  '75.0', '0.015', '0.015', '0.01',  '0.020', '0.010', '0.1', '0.1', '0.01',  '0.015', '0.03', ''],
            ['GC FeSi75Ti0.015-B',  '75.0', '0.015', '0.020', '0.03',  '0.025', '0.010', '0.2', '0.1', '0.03',  '0.020', '0.03', ''],
            ['GC FeSi75Ti0.02-A',   '75.0', '0.020', '0.015', '0.03',  '0.025', '0.010', '0.2', '0.1', '0.03',  '0.020', '0.03', ''],
            ['GC FeSi75Ti0.02-B',   '75.0', '0.020', '0.020', '0.10',  '0.030', '0.010', '0.2', '0.1', '0.10',  '0.020', '0.03', ''],
            ['GC FeSi75Ti0.02-C',   '75.0', '0.050', '0.050', '0.50',  '0.030', '0.010', '0.2', '0.1', '0.50',  '0.020', '0.03', ''],
          ],
          footnote: 'Si: minimum content. All other elements: maximum content. Ti is the controlled element in this series. Empty cells are not specified for that grade.',
        },
        packaging: [
          '1 MT big bags on pallets',
          '50 kg woven bags',
          'Bulk in containers or loose on vessel',
          'Custom sizing: 10–100 mm or as specified',
        ],
        gallery: [
          images.ferrosilicon,
          images.ferrosilicon2,
          images.ferrosiliconHighGrade,
        ],
      }}
    />
  )
}
