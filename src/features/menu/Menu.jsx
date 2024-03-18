import { useLoaderData } from 'react-router-dom';
import { getMenu } from './../../services/apiRestaurant';
import MenuItem from './MenuItem.jsx';

function Menu() {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.key} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
