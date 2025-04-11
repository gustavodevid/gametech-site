import { Link } from "react-router-dom"
import { GamepadIcon, HardDrive, CreditCard, ShoppingBag, MapPin, Phone, Mail, Star, UsbIcon, Laptop2Icon, Laptop, PcCase, ComputerIcon } from "lucide-react"
import { Button } from "../components/Button"
import { Card, CardContent } from "../components/Card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs"
import styles from "../styles/HomePage.module.css"

export default function HomePage() {
  return (
    <div>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <GamepadIcon size={28} color="#3a8ff7" />
            <span className={styles.logoText}>GameDev</span>
          </div>
          <nav className={styles.nav}>
            <Link to="#" className={styles.navLink}>
              Início
            </Link>
            <Link to="#services" className={styles.navLink}>
              Serviços
            </Link>
            <Link to="#products" className={styles.navLink}>
              Produtos
            </Link>
            <Link to="#contact" className={styles.navLink}>
              Contato
            </Link>
          </nav>
          <Button className="hidden-mobile">Fazer Pedido</Button>
          <Button variant="outline" size="icon" className={styles.mobileMenuButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div>
                  <h1 className={styles.heroTitle}>Soluções em Games para PS2 e Xbox 360</h1>
                  <p className={styles.heroDescription}>
                    Instalação de jogos em pen drives e HDs, venda de acessórios e muito mais para sua experiência
                    gamer.
                  </p>
                </div>
                <div className={styles.heroButtons}>
                  <a href="#services">
                    <Button fullWidth size="lg">
                      Ver Serviços
                    </Button>
                  </a>
                  <a href="#contact">
                    <Button variant="outline" fullWidth size="lg">
                      Contato
                    </Button>
                  </a>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <img
                  src="https://placehold.co/550x550/0f2744/3a8ff7"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className={styles.heroImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Serviços</h2>
              <p className={styles.sectionDescription}>
              </p>
            </div>

            <div className={styles.servicesGrid}>
              <Card className={styles.serviceCard}>
                <CardContent className={styles.serviceCardContent}>
                  <div className={styles.serviceIcon}>
                    <UsbIcon size={32} />
                  </div>
                  <h3 className={styles.serviceTitle}>Jogos de PS2 em Pen Drive</h3>
                  <p className={styles.serviceDescription}> Instalamos seus jogos favoritos de PS2 no pen drive.
                  </p>
                  <Button variant="outline" fullWidth>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>

              <Card className={styles.serviceCard}>
                <CardContent className={styles.serviceCardContent}>
                  <div className={styles.serviceIcon}>
                    <HardDrive size={32} />
                  </div>
                  <h3 className={styles.serviceTitle}>Jogos de Xbox 360 em HD</h3>
                  <p className={styles.serviceDescription}>
                    Instalação de jogos de Xbox 360 em HD externo ou interno.
                  </p>
                  <Button variant="outline" fullWidth>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>

              <Card className={styles.serviceCard}>
                <CardContent className={styles.serviceCardContent}>
                  <div className={styles.serviceIcon}>
                    <CreditCard size={32} />
                  </div>
                  <h3 className={styles.serviceTitle}>Memory Cards para PS2</h3>
                  <p className={styles.serviceDescription}>
                    Venda de memory cards com OPL atualizado. 
                  </p>
                  <Button variant="outline" fullWidth>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>

              <Card className={styles.serviceCard}>
                <CardContent className={styles.serviceCardContent}>
                  <div className={styles.serviceIcon}>
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className={styles.serviceTitle}>Pen Drives com Jogos</h3>
                  <p className={styles.serviceDescription}>
                    Vendemos pen drives já carregados com seus jogos favoritos de PS2, plugue e jogue.
                  </p>
                  <Button variant="outline" fullWidth>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>

              <Card className={styles.serviceCard}>
                <CardContent className={styles.serviceCardContent}>
                  <div className={styles.serviceIcon}>
                    <Laptop size={32} />
                  </div>
                  <h3 className={styles.serviceTitle}>Manutenção de notebooks</h3>
                  <p className={styles.serviceDescription}>
                    Instalação de sistemas operacionais, peças, limpeza e formatação em notebooks.
                  </p>
                  <Button variant="outline" fullWidth>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>

              <Card className={styles.serviceCard}>
                <CardContent className={styles.serviceCardContent}>
                  <div className={styles.serviceIcon}>
                    <ComputerIcon size={32} />
                  </div>
                  <h3 className={styles.serviceTitle}>Manutenção de Pc's</h3>
                  <p className={styles.serviceDescription}>
                  Instalação de sistemas operacionais, peças, limpeza e formatação. 
                  </p>
                  <Button variant="outline" fullWidth>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="products" className={`${styles.section} ${styles.sectionMuted}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Nossos Produtos</h2>
              <p className={styles.sectionDescription}>
              </p>
            </div>

            <div className={styles.productsContainer}>
              <Tabs defaultValue="pendrive">
                <TabsList className="grid-cols-3">
                  <TabsTrigger value="pendrive">Pen Drives</TabsTrigger>
                  <TabsTrigger value="memory">Memory Cards</TabsTrigger>
                  <TabsTrigger value="accessories">Acessórios</TabsTrigger>
                </TabsList>

                <TabsContent value="pendrive">
                  <div className={styles.productsGrid}>
                    <Card>
                      <CardContent>
                        <div className={styles.productImageContainer}>
                          <img
                            src="https://placehold.co/300x300/0f2744/3a8ff7"
                            alt="Pen Drive 32GB"
                            className={styles.productImage}
                          />
                        </div>
                        <div className={styles.productInfo}>
                          <h3 className={styles.productTitle}>Pen Drive 32GB com 10 Jogos PS2</h3>
                          <p className={styles.productDescription}>
                            Pen drive com 10 jogos populares de PS2 pré-instalados, pronto para jogar
                          </p>
                          <p className={styles.productPrice}>R$ 50,00</p>
                        </div>
                        <Button fullWidth>Adicionar ao Carrinho</Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent>
                        <div className={styles.productImageContainer}>
                          <img
                            src="https://placehold.co/300x300/0f2744/3a8ff7"
                            alt="Pen Drive 64GB"
                            className={styles.productImage}
                          />
                        </div>
                        <div className={styles.productInfo}>
                          <h3 className={styles.productTitle}>Pen Drive 64GB com 20 Jogos PS2</h3>
                          <p className={styles.productDescription}>
                            Pen drive com 20 jogos populares de PS2 pré-instalados, alta capacidade
                          </p>
                          <p className={styles.productPrice}>R$ 60,00</p>
                        </div>
                        <Button fullWidth>Adicionar ao Carrinho</Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent>
                        <div className={styles.productImageContainer}>
                          <img
                            src="https://placehold.co/300x300/0f2744/3a8ff7"
                            alt="Pen Drive 128GB"
                            className={styles.productImage}
                          />
                        </div>
                        <div className={styles.productInfo}>
                          <h3 className={styles.productTitle}>Pen Drive 128GB com 40 Jogos PS2</h3>
                          <p className={styles.productDescription}>
                            Pen drive com 40 jogos populares de PS2 pré-instalados, coleção completa
                          </p>
                          <p className={styles.productPrice}>R$ 70,00</p>
                        </div>
                        <Button fullWidth>Adicionar ao Carrinho</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="memory">
                  <div className={styles.productsGrid}>
                    <Card>
                      <CardContent>
                        <div className={styles.productImageContainer}>
                          <img
                            src="https://placehold.co/300x300/0f2744/3a8ff7"
                            alt="Memory Card 8MB"
                            className={styles.productImage}
                          />
                        </div>
                        <div className={styles.productInfo}>
                          <h3 className={styles.productTitle}>Memory Card 8MB + OPL</h3>
                          <p className={styles.productDescription}>
                            Memory card 8MB para PlayStation 2 com OPL instalado.
                          </p>
                          <p className={styles.productPrice}>R$ 40,00</p>
                        </div>
                        <Button fullWidth>Adicionar ao Carrinho</Button>
                      </CardContent>
                    </Card>


                    <Card>
                      <CardContent>
                        <div className={styles.productImageContainer}>
                          <img
                            src="https://placehold.co/300x300/0f2744/3a8ff7"
                            alt="Memory Card 64MB"
                            className={styles.productImage}
                          />
                        </div>
                        <div className={styles.productInfo}>
                          <h3 className={styles.productTitle}>Memory Card 8MB sem OPL</h3>
                          <p className={styles.productDescription}>
                          Apenas o Memory card para PlayStation 2 sem OPL instalado.
                          </p>
                          <p className={styles.productPrice}>R$ 30,00</p>
                        </div>
                        <Button fullWidth>Adicionar ao Carrinho</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="accessories">
                  <div className={styles.productsGrid}>
                    <Card>
                      <CardContent>
                        <div className={styles.productImageContainer}>
                          <img
                            src="https://placehold.co/300x300/0f2744/3a8ff7"
                            alt="HD Externo 500GB"
                            className={styles.productImage}
                          />
                        </div>
                        <div className={styles.productInfo}>
                          <h3 className={styles.productTitle}>HD Externo 500GB tunado</h3>
                          <p className={styles.productDescription}>HD externo lotado de jogos PS2, plug and play</p>
                          <p className={styles.productPrice}>R$ 150,00</p>
                        </div>
                        <Button fullWidth>Adicionar ao Carrinho</Button>
                      </CardContent>
                    </Card>

                    {/* <Card>
                      <CardContent>
                        <div className={styles.productImageContainer}>
                          <img
                            src="https://placehold.co/300x300/0f2744/3a8ff7"
                            alt="Adaptador OPL"
                            className={styles.productImage}
                          />
                        </div>
                        <div className={styles.productInfo}>
                          <h3 className={styles.productTitle}>Adaptador OPL para PS2</h3>
                          <p className={styles.productDescription}>
                            Adaptador para usar OPL no PlayStation 2, fácil instalação
                          </p>
                          <p className={styles.productPrice}>R$ 59,90</p>
                        </div>
                        <Button fullWidth>Adicionar ao Carrinho</Button>
                      </CardContent>
                    </Card> */}

                    {/* <Card>
                      <CardContent>
                        <div className={styles.productImageContainer}>
                          <img
                            src="https://placehold.co/300x300/0f2744/3a8ff7"
                            alt="Cabo HDMI"
                            className={styles.productImage}
                          />
                        </div>
                        <div className={styles.productInfo}>
                          <h3 className={styles.productTitle}>Cabo HDMI para PS2</h3>
                          <p className={styles.productDescription}>
                            Cabo adaptador HDMI para PlayStation 2, melhor qualidade de imagem
                          </p>
                          <p className={styles.productPrice}>R$ 79,90</p>
                        </div>
                        <Button fullWidth>Adicionar ao Carrinho</Button>
                      </CardContent>
                    </Card> */}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Depoimentos</h2>
              <p className={styles.sectionDescription}>Veja o que nossos clientes dizem sobre nossos serviços.</p>
            </div>

            <div className={styles.testimonialsGrid}>
              <Card className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialAvatar}>
                      <img src="https://placehold.co/40x40/0f2744/3a8ff7" width={40} height={40} alt="Avatar" />
                    </div>
                    <div>
                      <h3 className={styles.testimonialAuthor}>Carlos Silva</h3>
                      <p className={styles.testimonialMeta}>Cliente desde 2021</p>
                    </div>
                  </div>
                  <p className={styles.testimonialText}>
                    "Comprei um pen drive com jogos de PS2 e funciona perfeitamente. Recomendo muito o serviço! A equipe
                    foi super atenciosa e me ajudou a escolher os melhores jogos."
                  </p>
                  <div className={styles.testimonialStars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="#ffcb47" color="#ffcb47" />
                    ))}
                  </div>
                </div>
              </Card>

              <Card className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialAvatar}>
                      <img src="https://placehold.co/40x40/0f2744/3a8ff7" width={40} height={40} alt="Avatar" />
                    </div>
                    <div>
                      <h3 className={styles.testimonialAuthor}>Ana Oliveira</h3>
                      <p className={styles.testimonialMeta}>Cliente desde 2022</p>
                    </div>
                  </div>
                  <p className={styles.testimonialText}>
                    "Instalaram jogos no HD do meu Xbox 360 e agora posso jogar sem trocar de disco. Excelente serviço!
                    Rápido, eficiente e com ótimo custo-benefício."
                  </p>
                  <div className={styles.testimonialStars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="#ffcb47" color="#ffcb47" />
                    ))}
                  </div>
                </div>
              </Card>

              <Card className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.testimonialAvatar}>
                      <img src="https://placehold.co/40x40/0f2744/3a8ff7" width={40} height={40} alt="Avatar" />
                    </div>
                    <div>
                      <h3 className={styles.testimonialAuthor}>Pedro Santos</h3>
                      <p className={styles.testimonialMeta}>Cliente desde 2020</p>
                    </div>
                  </div>
                  <p className={styles.testimonialText}>
                    "Meu PS2 estava com problemas e eles consertaram rapidamente. Aproveitei e comprei um memory card.
                    Ótimo atendimento e preço justo! Voltarei com certeza."
                  </p>
                  <div className={styles.testimonialStars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="#ffcb47" color="#ffcb47" />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.sectionMuted}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Entre em Contato</h2>
              <p className={styles.sectionDescription}>
                Estamos prontos para atender você e tirar todas as suas dúvidas. Fale conosco e descubra como podemos
                melhorar sua experiência gamer.
              </p>
            </div>

            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <MapPin className={styles.contactIcon} size={20} />
                  <p>Av. Julio Marques do Nascimento, 1158, Cristo Rei - Cajazeiras - Paraíba</p>
                </div>
                <div className={styles.contactItem}>
                  <Phone className={styles.contactIcon} size={20} />
                  <p>(83) 99113-5073</p>
                </div>
                <div className={styles.contactItem}>
                  <Mail className={styles.contactIcon} size={20} />
                  <p>gustavo.cesariosilva15@gmail.com</p>
                </div>
                <div className={styles.contactMap}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d458.44442264077145!2d-38.545529579506834!3d-6.892724694914315!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1744387157102!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className={styles.contactForm}>
                <div className={styles.formRowSplit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="first-name" className={styles.formLabel}>
                      Nome
                    </label>
                    <input id="first-name" className={styles.formInput} placeholder="Digite seu nome" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="last-name" className={styles.formLabel}>
                      Sobrenome
                    </label>
                    <input id="last-name" className={styles.formInput} placeholder="Digite seu sobrenome" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email
                  </label>
                  <input id="email" type="email" className={styles.formInput} placeholder="Digite seu email" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Telefone
                  </label>
                  <input id="phone" type="tel" className={styles.formInput} placeholder="Digite seu telefone" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Mensagem
                  </label>
                  <textarea id="message" className={styles.formTextarea} placeholder="Digite sua mensagem"></textarea>
                </div>
                <Button fullWidth size="lg">
                  Enviar Mensagem
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          <p className={styles.footerText}>© 2025 GameDev. Todos os direitos reservados.</p>
          <div className={styles.footerLinks}>
            <Link to="#" className={styles.footerLink}>
              Termos de Serviço
            </Link>
            <Link to="#" className={styles.footerLink}>
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
