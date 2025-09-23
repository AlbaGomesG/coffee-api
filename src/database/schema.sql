CREATE DATABASE coffees;

\c coffees;

CREATE TABLE coffee (
    id SERIAL PRIMARY KEY,
    image TEXT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    ingredients TEXT
);

INSERT INTO coffee (image, title, description, ingredients) VALUES
('https://i.pinimg.com/736x/70/5e/d3/705ed37a26efb47337b465f5c12fe54a.jpg', 'Café Expresso', 'Intenso, aromático e cheio de personalidade, o nosso café expresso é preparado com grãos selecionados e moídos na hora, garantindo sabor marcante e energia em cada gole.', 'Café moído, água quente'),
('https://i.pinimg.com/1200x/47/f9/e1/47f9e1817dff1fcd5e8756b6771fa192.jpg', 'Cappuccino', 'Cremoso e equilibrado, o nosso cappuccino combina o sabor encorpado do café expresso com a suavidade do leite vaporizado e a leve doçura da espuma, resultando em uma experiência aconchegante a cada xícara.', 'Café expresso, leite vaporizado, espuma de leite'),
('https://i.pinimg.com/1200x/b8/4c/9d/b84c9db0910aa8247d79b69a4ecd1438.jpg', 'Latte', 'Suave e delicado, o nosso latte une o café expresso ao leite cremoso vaporizado, criando uma bebida leve e envolvente, perfeita para quem busca um sabor equilibrado e aconchegante.', 'Café expresso, leite vaporizado'),
('https://i.pinimg.com/1200x/71/53/9a/71539aff0387ab8c23476269d357624e.jpg', 'Mocha', 'Uma deliciosa combinação de café expresso, leite cremoso e chocolate aveludado. Doçura e intensidade em perfeita harmonia, ideal para quem ama unir energia e sabor marcante em uma única xícara.', 'Café expresso, leite vaporizado, calda de chocolate, chantilly'),
('https://i.pinimg.com/1200x/e9/b1/43/e9b1431a068ab4e62feb437ffff3c1aa.jpg', 'Chocolate Quente Cremoso', 'Rico em sabor e com textura aveludada, nosso chocolate quente cremoso é feito para quem busca aconchego em cada gole — uma verdadeira indulgência que derrete na boca.', 'Leite, chocolate em pó, açúcar, chantilly');