import ProductPage from '../components/ProductPage'
import { images } from '../lib/images'

export default function Ferrochrome() {
  return (
    <ProductPage
      data={{
        name: 'Ferrochrome',
        bannerImg: images.ferrochrome,
        featureImg: images.ferrochrome,
        tagline: 'Chromium-iron alloy essential for stainless and high-alloy steel.',
        intro: 'Ferrochrome is an alloy of chromium and iron, the primary source of chromium for stainless steel production. It imparts corrosion resistance, hardness, and high-temperature strength.',
        description: 'YYD METALS supplies both high-carbon and low-carbon ferrochrome grades, suitable for stainless steel mills, foundries, and specialty alloy producers. Material is available in lump, crushed, and sized forms with consistent chemistry.',
        applications: [
          'Primary chromium additive in stainless steel production',
          'Alloying agent for high-strength and heat-resistant steels',
          'Chromium addition in foundry castings',
          'Specialty alloy manufacturing',
          'Wear-resistant and tool steel grades',
        ],
        grades: [
          { grade: 'HC FeCr', composition: 'Cr 60–65%, C 4–8%, Si ≤ 4%, P ≤ 0.05%, S ≤ 0.05%' },
          { grade: 'MC FeCr', composition: 'Cr 60–65%, C 1–4%, Si ≤ 3%, P ≤ 0.05%, S ≤ 0.05%' },
          { grade: 'LC FeCr', composition: 'Cr 65–75%, C 0.05–0.5%, Si ≤ 1.5%, P ≤ 0.03%, S ≤ 0.03%' },
          { grade: 'VLC FeCr', composition: 'Cr 65–75%, C ≤ 0.05%, Si ≤ 1.0%, P ≤ 0.03%, S ≤ 0.03%' },
        ],
        packaging: [
          '1 MT big bags on pallets',
          '50 kg steel drums',
          'Bulk in containers',
          'Sizing: 10–150 mm or as specified',
        ],
        gallery: [
          images.ferrochrome,
        ],
      }}
    />
  )
}
