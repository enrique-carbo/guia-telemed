import {
  Video,
  Shield,
  FileUp,
  MessageCircle,
  Mail,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  ChevronRight,
  Clock,
  Lock,
  Smartphone,
  Monitor,
  Wifi,
  Headphones,
  ArrowRight,
  Star,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

function App() {
  const platforms = [
    {
      id: "calcom",
      name: "Cal.com",
      subtitle: "Videollamada automática",
      difficulty: "Muy fácil",
      difficultyColor: "bg-emerald-100 text-emerald-700",
      install: "No necesaria",
      files: false,
      video: true,
      privacy: "Estándar",
      icon: Video,
      color: "from-emerald-500 to-teal-600",
      ideal: "Consultas cortas de seguimiento",
      pros: [
        "Sin instalación",
        "Enlace automático",
        "Funciona en cualquier navegador",
      ],
      cons: ["No permite enviar archivos", "Funcionalidad básica"],
      steps: [
        "Abre el correo de confirmación de tu turno",
        "Busca el enlace de videollamada de Cal.com",
        "5 minutos antes de la hora, haz clic en el enlace",
        "Permite acceso a cámara y micrófono cuando el navegador lo solicite",
        "Espera a que el médico se una a la llamada",
      ],
    },
    {
      id: "myclinic",
      name: "MyClinic.com",
      subtitle: "Plataforma completa",
      difficulty: "Fácil",
      difficultyColor: "bg-blue-100 text-blue-700",
      install: "No (navegador)",
      files: true,
      video: true,
      privacy: "Alta",
      icon: Monitor,
      color: "from-blue-500 to-cyan-600",
      ideal: "Mayoría de pacientes (80%)",
      pros: [
        "Videollamada + archivos",
        "Todo en un solo lugar",
        "Interfaz intuitiva",
        "Historial de consultas",
        "No requiere registro previo",
      ],
      cons: [
        "Necesita algo de configuración inicial",
        "La página esta en inglés (es simple igualmente)",
      ],
      steps: [
        "Visita https://myclinic.com/for-patients",
        "Presiona el botón PATIENT CHECK IN",
        "Ingresa el código de la clínica que se enviará luego de confirmar la consulta",
        "Completa tu perfil con datos básicos",
        "Sube archivos si es necesario (fotos clínicas, análisis, radiografías)",
        "Accede al panel de paciente",
        "Inicia la videollamada desde el mismo panel a la hora indicada",
      ],
    },
    {
      id: "keet",
      name: "Keet.io",
      subtitle: "Máxima privacidad",
      difficulty: "Media",
      difficultyColor: "bg-indigo-100 text-indigo-700",
      install: "Sí (app ligera)",
      files: true,
      video: true,
      privacy: "Máxima (P2P)",
      icon: Shield,
      color: "from-indigo-500 to-purple-600",
      ideal: "Pacientes con información sensible",
      pros: [
        "Cifrado punto a punto",
        "Privacidad total",
        "Sin servidores intermediarios",
        "Se pueden enviar archivos",
      ],
      cons: ["Requiere instalación", "Curva de aprendizaje media"],
      steps: [
        "Descarga Keet.io desde https://keet.io/download/",
        "Instala la aplicación en tu dispositivo (Windows, Mac, Linux, iOS, Android)",
        "Crea tu perfil en la app",
        "Guarda tus 24 palabras semilla",
        "Comparte tu código de contacto con el médico",
        "Acepta la invitación a la consulta",
        "Inicia la videollamada desde la app a la hora acordada",
      ],
    },
    {
      id: "altsendme",
      name: "AltSendMe.com",
      subtitle: "Solo para archivos",
      difficulty: "Muy fácil",
      difficultyColor: "bg-slate-100 text-slate-700",
      install: "No necesaria",
      files: true,
      video: false,
      privacy: "Alta (P2P)",
      icon: FileUp,
      color: "from-slate-500 to-gray-600",
      ideal: "Enviar documentos pesados de forma segura",
      pros: [
        "Sin registro",
        "Transferencia directa P2P",
        "Sin almacenamiento en nube",
      ],
      cons: [
        "Solo archivos, sin videollamada",
        "Debe usarse con otra plataforma",
        "La página web esta en inglés",
      ],
      steps: [
        "Visita https://www.altsendme.com/en",
        "Descarga la aplicación de acuerdo a tu sistema operativo",
        "AltSendme crea un código compartido único (llamado ticket).",
        "Comparte el código o ticket con el médico por el canal acordado",
        "Mantén la aplicación abierta hasta que la transferencia se complete",
      ],
    },
  ];

  const comparisonData = [
    {
      feature: "Videollamada",
      calcom: true,
      myclinic: true,
      keet: true,
      altsendme: false,
      whatsapp: true,
    },
    {
      feature: "Enviar archivos",
      calcom: false,
      myclinic: true,
      keet: true,
      altsendme: true,
      whatsapp: true,
    },
    {
      feature: "Sin instalación",
      calcom: true,
      myclinic: true,
      keet: false,
      altsendme: false,
      whatsapp: false,
    },
    {
      feature: "Sin registro",
      calcom: true,
      myclinic: true,
      keet: false,
      altsendme: true,
      whatsapp: false,
    },
    {
      feature: "Cifrado P2P",
      calcom: false,
      myclinic: false,
      keet: true,
      altsendme: true,
      whatsapp: false,
    },
    {
      feature: "Ideal para principiantes",
      calcom: true,
      myclinic: true,
      keet: false,
      altsendme: false,
      whatsapp: true,
    },
  ];

  const requirements = [
    {
      icon: Wifi,
      title: "Conexión estable",
      desc: "Mínimo 1 Mbps de subida y 10 Mbps de bajada",
    },
    {
      icon: Smartphone,
      title: "Dispositivo con cámara",
      desc: "Móvil, tablet, laptop o PC",
    },
    {
      icon: Headphones,
      title: "Audio funcional",
      desc: "Micrófono y altavoces/auriculares",
    },
    { icon: Clock, title: "Puntualidad", desc: "Conéctate 5 minutos antes" },
  ];

  const faqs = [
    {
      q: "¿Qué pasa si no me funciona ninguna plataforma?",
      a: "Contacta con anticipación por email o WhatsApp como último recurso. Buscaremos una solución alternativa.",
    },
    {
      q: "¿Puedo cambiar de plataforma entre consultas?",
      a: "Sí, cada consulta puede usar la plataforma que prefieras. Solo avisa con anticipación.",
    },
    {
      q: "¿Mis datos están seguros?",
      a: "Todas las plataformas recomendadas cumplen con normativas de protección de datos. Keet y AltSendMe ofrecen el máximo nivel de privacidad con cifrado P2P.",
    },
    {
      q: "¿Necesito crear cuenta en todas?",
      a: "No. Solo crea cuenta en la plataforma que vayas a usar. Cal.com y AltSendMe no requieren registro.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-3 rounded-xl">
              <Video className="w-8 h-8 text-blue-300" />
            </div>
            <Badge className="bg-blue-500/30 text-blue-100 border-blue-400/30">
              Guía Educativa
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Guía para tu <span className="text-blue-300">Teleconsulta</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Todo lo que necesitas saber para conectarte de forma segura y
            efectiva con tu médico
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed">
            Gracias por agendar tu turno. Esta guía te ayudará a elegir la mejor
            opción para tu consulta médica online. Todas las plataformas están
            ordenadas de la
            <strong className="text-blue-700">
              {" "}
              más sencilla a la más completa
            </strong>
            .
          </p>
        </section>

        {/* Alertas Importantes */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            Avisos Importantes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Alert className="border-amber-300 bg-amber-50">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <AlertTitle className="text-amber-800 font-semibold">
                No es para urgencias
              </AlertTitle>
              <AlertDescription className="text-amber-700">
                <span>
                  La telemedicina <strong>no sirve para emergencias</strong>.
                  Ante dolor en el pecho, dificultad para respirar, sangrado o
                  síntomas graves, llama al <strong> 107 </strong> y{" "}
                  <strong> 911 </strong> o acude a una guardia médica
                  inmediatamente.
                </span>
              </AlertDescription>
            </Alert>
            <Alert className="border-blue-300 bg-blue-50">
              <Info className="w-5 h-5 text-blue-600" />
              <AlertTitle className="text-blue-800 font-semibold">
                Limitaciones de la telemedicina
              </AlertTitle>
              <AlertDescription className="text-blue-700">
                No todas las consultas pueden ser a distancia. Si durante la
                videollamada se determina que necesitas un examen físico, se
                indicará acudir a un centro médico.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Requisitos Técnicos */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            Requisitos Técnicos Básicos
          </h2>
          <p className="text-slate-600 mb-6">
            Para que la teleconsulta funcione correctamente, es necesario
            manejar herramientas digitales básicas:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {requirements.map((req, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
              >
                <div className="bg-blue-100 p-2 rounded-lg">
                  <req.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">
                    {req.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Plataformas Detalladas */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Opciones de Conexión
          </h2>
          <p className="text-slate-600 mb-8">
            Elige la plataforma que mejor se adapte a tus necesidades
          </p>

          <div className="space-y-6">
            {platforms.map((platform) => (
              <Card
                key={platform.id}
                className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${platform.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${platform.color} text-white`}
                      >
                        <platform.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-xl">
                            {platform.name}
                          </CardTitle>
                          <Badge className={platform.difficultyColor}>
                            {platform.difficulty}
                          </Badge>
                        </div>
                        <p className="text-slate-500 text-sm">
                          {platform.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {platform.video && (
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Video className="w-3 h-3" /> Videollamada
                        </Badge>
                      )}
                      {platform.files && (
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <FileUp className="w-3 h-3" /> Archivos
                        </Badge>
                      )}
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Lock className="w-3 h-3" /> {platform.privacy}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Ideal para */}
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm">
                      <Star className="w-4 h-4 text-blue-500 inline mr-2" />
                      <strong className="text-blue-800">
                        Ideal para:
                      </strong>{" "}
                      <span className="text-blue-700">{platform.ideal}</span>
                    </p>
                  </div>

                  {/* Pros y Contras */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" /> Ventajas
                      </h4>
                      <ul className="space-y-1">
                        {platform.pros.map((pro, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-600 flex items-start gap-2"
                          >
                            <span className="text-emerald-500 mt-1">•</span>{" "}
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-rose-700 mb-2 flex items-center gap-2">
                        <XCircle className="w-4 h-4" /> Limitaciones
                      </h4>
                      <ul className="space-y-1">
                        {platform.cons.map((con, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-600 flex items-start gap-2"
                          >
                            <span className="text-rose-500 mt-1">•</span> {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pasos */}
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" /> Pasos a seguir
                    </h4>
                    <ol className="space-y-2">
                      {platform.steps.map((step, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 flex items-start gap-3"
                        >
                          <span className="bg-slate-200 text-slate-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tabla Comparativa */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 overflow-hidden">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Monitor className="w-6 h-6 text-blue-500" />
            Tabla Comparativa Rápida
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">
                    Característica
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-emerald-700">
                    Cal.com
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-700">
                    MyClinic
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-indigo-700">
                    Keet
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-700">
                    AltSendMe
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-green-700">
                    WhatsApp*
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >
                    <td className="py-3 px-4 text-sm text-slate-700">
                      {row.feature}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.calcom ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.myclinic ? (
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.keet ? (
                        <CheckCircle2 className="w-5 h-5 text-indigo-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.altsendme ? (
                        <CheckCircle2 className="w-5 h-5 text-slate-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {row.whatsapp ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            * WhatsApp y Email solo como último recurso si las opciones
            principales no funcionan.
          </p>
        </section>

        {/* Opción de Emergencia */}
        <section>
          <Card className="border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <HelpCircle className="w-5 h-5" />
                ¿Nada funciona? Opción de emergencia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-amber-700">
                WhatsApp y correo electrónico{" "}
                <strong>no son ideales para telemedicina</strong> por razones de
                privacidad y mezcla de datos personales. Sin embargo, los usaré
                si:
              </p>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                  Has probado las opciones 1, 2 o 3 y ninguna funciona
                </li>
              </ul>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-amber-800">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">WhatsApp: 3434 616785</span>
                </div>
                <div className="flex items-center gap-2 text-amber-800">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">
                    Email: admin@medicodermatologo.com.ar
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-500" />
            Preguntas Frecuentes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <h4 className="font-semibold text-slate-800 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm">
          <p className="mb-2">
            Esta guía es exclusiva para pacientes con turno asignado.
          </p>
          <p>
            Gracias por confiar en la telemedicina con responsabilidad. Nos
            vemos en la consulta.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
