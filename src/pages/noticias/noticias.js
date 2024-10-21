import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
export default function noticias() {
  var produtos = [
    {
        id: 1,
        produto: "Cafeteira Elétrica",
        descrição: "Cafeteira elétrica de alta eficiência que prepara até 12 xícaras de café de forma rápida e prática, ideal para qualquer momento do dia."
    },
    {
        id: 2,
        produto: "Smartphone XPro",
        descrição: "Smartphone com tela de 6,5 polegadas, câmera de alta resolução e armazenamento de 128 GB, perfeito para capturar todos os momentos especiais."
    },
    {
        id: 3,
        produto: "Fone de Ouvido Bluetooth",
        descrição: "Fone de ouvido sem fio com cancelamento de ruído, ideal para ouvir suas músicas favoritas com qualidade excepcional e total conforto."
    },
    {
        id: 4,
        produto: "Liquidificador Turbo",
        descrição: "Liquidificador potente com múltiplas velocidades, perfeito para preparar smoothies, sopas e molhos, garantindo a textura ideal em cada receita."
    },
    {
        id: 5,
        produto: "Tênis Esportivo",
        descrição: "Tênis esportivo com tecnologia de amortecimento, ideal para corredores e praticantes de atividades físicas que buscam conforto e performance."
    }
]

  return (
    <>
      <Menu />
      <Container>Lista
        {produtos.map(produto =>
        <div>
          <p>{produto.produto}</p>
        </div>
        )}
        </Container> 
      <Footer />
    </>
  );
}