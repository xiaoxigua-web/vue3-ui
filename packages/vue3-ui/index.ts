import { App } from 'vue'
import Button from '@vue3-ui/button';
import Icon from '@vue3-ui/icon';


const components = [
  Button,
  Icon,
]

const install = (app:App):void => {
   components.forEach(component =>{
        app.component(component.name,component)
   })
}

export default {
  install
}