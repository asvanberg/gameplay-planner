

import Cards from './page_content.jsx';
import ReactGA from "react-ga4";
ReactGA.initialize([{
  trackingId: "G-GGLPK02VH8",
  // gaOptions: {...}, // optional
  gtagOptions: {
      send_page_view: false
  },
}]);
export async function generateMetadata({ params, searchParams }, parent) {

    return {
      title: 'Gameplay Planner',
      description: "Helps you pick the best card to charge based on priority or weights. Displays card bonus such as temporary power, permanent power, levels."
    }
  }

export default function Page() {

    return <Cards />
}