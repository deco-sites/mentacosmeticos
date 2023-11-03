import type { SectionProps } from '$live/mod.ts';

// Props type that will be configured in deco.cx's Admin
export interface Props {
  name: string;
  product_category?: string;
  product_type?: string;
  brand?: string;
  // Outras propriedades
}

export async function loader(
  { name, product_category, product_type, brand }: Props,
  _req: Request
) {
  // Ajuste a URL para incluir o parâmetro "name" na busca
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?name=${name}`;

  const data = await fetch(url);
  const products = await data.json();

  console.log('products:', products);

  return { products, name, product_category, product_type, brand };
}

export default function ProductInfo({
  name,
  products,
  filteredProducts,
}: SectionProps<typeof loader>) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{name}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.product_type} - {product.brand}
          </li>
        ))}
      </ul>
    </div>
  );
}
