import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.css';
import Head from './Head';
import { Link } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchData(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (e) {
        setError('An error has occurred :(');
      } finally {
        setLoading(false);
      }
    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (product == null) return null;
  return (
    <section className={`${styles.product} animeLeft`}>
      <Head title={`${product.nome}`} description={`Buy ${product.nome}`} />
      <div>
        {product.fotos.map((img) => (
          <img key={img.src} src={img.src} alt={img.titulo} />
        ))}
      </div>
      <div>
        <h1>{product.nome}</h1>
        <span className={styles.price}>$ {product.preco}</span>
        <p className={styles.description}>{product.descricao}</p>
        <Link to="/" className={styles.goback}>
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default Product;
