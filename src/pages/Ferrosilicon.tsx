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
        description: 'YYD METALS supplies ferrosilicon in multiple silicon contents, from foundry grades to high-purity grades for specialty applications. Material is available in lump, crushed, and powder forms to suit different furnace and process requirements.',
        applications: [
          'Deoxidation of molten steel in basic oxygen and electric arc furnaces',
          'Alloying agent for silicon-bearing steels and electrical steels',
          'Inoculant for cast iron to promote graphite formation',
          'Dense medium separation in mineral processing',
          'Production of silicon-rich specialty alloys',
        ],
        grades: [
          { grade: 'FeSi 75%', composition: 'Si 72–78%, Al ≤ 2.0%, C ≤ 0.2%, P ≤ 0.04%, S ≤ 0.02%' },
          { grade: 'FeSi 72%', composition: 'Si 70–75%, Al ≤ 2.0%, C ≤ 0.2%, P ≤ 0.04%, S ≤ 0.02%' },
          { grade: 'FeSi 65%', composition: 'Si 63–68%, Al ≤ 2.0%, C ≤ 0.2%, P ≤ 0.04%, S ≤ 0.02%' },
          { grade: 'FeSi 45%', composition: 'Si 43–47%, Al ≤ 2.0%, C ≤ 0.2%, P ≤ 0.04%, S ≤ 0.02%' },
          { grade: 'Low-Al FeSi 75%', composition: 'Si 74–78%, Al ≤ 0.5%, C ≤ 0.1%, P ≤ 0.03%' },
        ],
        packaging: [
          '1 MT big bags on pallets',
          '50 kg woven bags',
          'Bulk in containers or loose on vessel',
          'Custom sizing: 10–100 mm or as specified',
        ],
        gallery: [
          images.ferrosilicon,
          images.ferrosiliconHighGrade,
        ],
      }}
    />
  )
}
