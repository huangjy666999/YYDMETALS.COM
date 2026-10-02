import ProductPage from '../components/ProductPage'
import { images } from '../lib/images'

export default function Ferrosulfur() {
  return (
    <ProductPage
      data={{
        name: 'Ferrosulfur',
        bannerImg: images.ferrosulfur1,
        featureImg: images.ferrosulfur1,
        tagline: 'Sulfur-iron alloy for free-machining steels and controlled sulfur additions.',
        intro: 'Ferrosulfur is an iron-sulfur alloy used to introduce controlled amounts of sulfur into steel and iron. It is primarily used in the production of free-machining steels where sulfur improves machinability.',
        description: 'YYD METALS supplies ferrosulfur with consistent sulfur content for foundries and steel mills requiring precise sulfur control. The material is available in lump and crushed forms for easy charging.',
        applications: [
          'Free-machining steel production for improved chip breaking',
          'Controlled sulfur addition in gray and ductile cast iron',
          'Adjustment of sulfur levels in specialty steel grades',
          'Metallurgical processes requiring precise sulfur control',
        ],
        grades: [
          { grade: 'FeS 45%', composition: 'S 42–48%, Fe balance, Si ≤ 3%, C ≤ 1%, P ≤ 0.1%' },
          { grade: 'FeS 32%', composition: 'S 30–35%, Fe balance, Si ≤ 3%, C ≤ 1%, P ≤ 0.1%' },
          { grade: 'FeS 28%', composition: 'S 26–30%, Fe balance, Si ≤ 3%, C ≤ 1%, P ≤ 0.1%' },
        ],
        packaging: [
          '1 MT big bags on pallets',
          '50 kg woven bags',
          'Bulk in containers',
          'Custom sizing on request',
        ],
        gallery: [
          images.ferrosulfur1,
          images.ferrosulfur2,
          images.ferrosulfur3,
        ],
      }}
    />
  )
}
