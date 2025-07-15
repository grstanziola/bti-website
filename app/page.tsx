"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowDown, Package, Truck, Globe, CheckCircle, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function BTIPresentation() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              BEST TRADERS
            </h1>
            <div className="text-2xl md:text-3xl font-light tracking-wider">INC.</div>
          </div>

          <p
            className="text-xl md:text-2xl mb-12 opacity-0 animate-fade-in-up font-light"
            style={{ animationDelay: "0.6s" }}
          >
            Conectando fabricantes internacionales con empresas de alto consumo en América Latina
          </p>

          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-lg">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>Panamá</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-white rounded-full" />
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                <span>Desde 2014</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-white rounded-full" />
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Logística Industrial</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Quiénes Somos */}
      <section ref={addToRefs} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">¿Quiénes Somos?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Best Traders Inc. (BTI)</strong> es una empresa con sede en Panamá
                dedicada a la importación, representación y distribución de productos industriales y logísticos en
                América Latina.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Fundada en <strong>2014</strong>, BTI se ha especializado en conectar fabricantes internacionales con
                empresas de alto consumo y operación intensiva en logística.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-slate-600">Años de Experiencia</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">100+</div>
                  <div className="text-slate-600">Clientes Activos</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl flex items-center justify-center">
                <Package className="w-32 h-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section ref={addToRefs} className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Sectores que Atendemos</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Retail", icon: "🏪", color: "from-blue-500 to-blue-600" },
              { name: "Agroindustria", icon: "🌾", color: "from-green-500 to-green-600" },
              { name: "Alimentos", icon: "🍎", color: "from-orange-500 to-orange-600" },
              { name: "Bebidas", icon: "🥤", color: "from-purple-500 to-purple-600" },
            ].map((sector, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${sector.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{sector.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Productos */}
      <section ref={addToRefs} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Nuestros Productos</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Productos duraderos, apilables, resistentes y reutilizables, cumpliendo con estándares técnicos y
              sanitarios
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Tarimas Plásticas",
              "Cajas Logísticas",
              "Canastas Plásticas",
              "Empaques para Bebidas",
              "Soluciones Personalizadas",
            ].map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <Package className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm">{product}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Proyectos */}
      <section ref={addToRefs} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Nuestros Proyectos</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cartones para Huevos",
                description: "Material reciclable de alta absorción. Capacidad de 6 a 30 huevos.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Cubeta de 5 Galones",
                description: "Capacidad de carga pesada para helados, pinturas y líquidos.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Cajas Embonables",
                description: "HDPE, 60x40x20 cm. Diseñadas para ahorrar espacio.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Cajas Cúbicas",
                description: "Perfectas para productos pequeños a medianos.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Jaulas para Pollo",
                description: "HDPE virgen con ventilación para transporte seguro.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Canastillas Industriales",
                description: "Cartón liviano para frutas, verduras y productos frescos.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0">
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section ref={addToRefs} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Nuestros Clientes</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-xl text-slate-600">
              Empresas que requieren soluciones robustas, repetibles y de alto volumen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Cadenas de Supermercados", icon: "🏪" },
              { type: "Plantas de Alimentos", icon: "🏭" },
              { type: "Operadores Logísticos", icon: "🚛" },
              { type: "Centros de Distribución", icon: "📦" },
              { type: "Industrias Avícolas", icon: "🐔" },
              { type: "Mercados Mayoristas", icon: "🏬" },
            ].map((client, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {client.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{client.type}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qué Ofrecemos */}
      <section ref={addToRefs} className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">¿Qué Ofrecemos?</h2>
            <div className="w-24 h-1 bg-white mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Canal consolidado con experiencia y acceso directo",
              "Conocimiento profundo del marco logístico panameño",
              "Infraestructura para importación y distribución",
              "Capacidades de consultoría técnica",
              "Comunicación continua con fábricas",
              "Asesoría permanente disponible",
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section ref={addToRefs} className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Contacto</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12" />

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Website</h3>
                <p className="text-blue-600">www.btipanama.com</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                <p className="text-green-600">Sales@btipanama.com</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Teléfono</h3>
                <p className="text-orange-600">+507 6920 6318</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-slate-700 rounded-xl text-white">
              <p className="text-xl font-light italic">
                "En Best Traders Inc. trabajamos para que tú sigas avanzando mientras nosotros optimizamos cada proceso.
                Hacemos que tu negocio crezca con soluciones estratégicas y eficientes."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
