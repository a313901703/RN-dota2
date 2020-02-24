import Heroes from '../containers/Hero/Index'
import HeroesView from '../containers/Hero/View'
import Items from '../containers/Items/index'

const routers = {
  Heroes: { screen: Heroes },
  HeroesView: {screen:HeroesView},
  Items:{screen:Items}
}

export default routers