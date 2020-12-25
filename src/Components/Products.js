import React from 'react';
import styles from './Products.module.css';
import Head from './Head';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProducts(json));
  }, []);

  if (products == null) return null;
  return (
    <section className={`${styles.products} animeLeft`}>
      <Head title="Products" description="Our products" />
      {products.map((p) => (
        <Link to={`product/${p.id}`} key={p.id}>
          <img src={p.fotos[0].src} alt={p.fotos[0].titulo} />
          <h1 className={styles.name}>{p.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Products;
