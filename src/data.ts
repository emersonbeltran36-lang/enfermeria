import { Procedure, Drug, Pathology, LabValue, DictionaryEntry, ClinicalCase } from './types';

export const PROCEDURES: Procedure[] = [
  {
    id: 'cvc',
    name: 'Cateterismo Venoso Central',
    type: 'invasive',
    materials: [
      'Kit de CVC (catéter, guía, dilatador)',
      'Solución antiséptica (Clorhexidina)',
      'Campos estériles',
      'Gasa estéril',
      'Sutura (Seda 2-0 o 3-0)',
      'Anestésico local (Lidocaína 1% o 2%)',
      'Solución salina 0.9%'
    ],
    steps: [
      'Posicionamiento del paciente (Trendelenburg si es yugular/subclavia).',
      'Lavado de manos quirúrgico y postura de EPP.',
      'Asepsia y antisepsia de la zona.',
      'Infiltración de anestésico local.',
      'Punción y técnica de Seldinger.',
      'Verificación de retorno venoso.',
      'Fijación del catéter y curación plana.'
    ],
    biosecurity: [
      'Uso obligatorio de bata, gorro, tapabocas N95 y guantes estériles.',
      'Manejo estricto de técnica aséptica.',
      'Desecho de cortopunzantes en guardián.'
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sv',
    name: 'Toma de Signos Vitales',
    type: 'non-invasive',
    materials: [
      'Tensionómetro',
      'Fonendoscopio',
      'Termómetro',
      'Oxímetro de pulso',
      'Reloj con segundero'
    ],
    steps: [
      'Explicar el procedimiento al paciente.',
      'Asegurar que el paciente esté en reposo (mín. 5 min).',
      'Medir Tensión Arterial (TA).',
      'Medir Frecuencia Cardíaca (FC) y Respiratoria (FR).',
      'Medir Temperatura y Saturación de Oxígeno (SpO2).',
      'Registrar en la hoja de signos vitales.'
    ],
    biosecurity: [
      'Lavado de manos antes y después del contacto.',
      'Desinfección de equipos entre pacientes.'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sng',
    name: 'Sondaje Nasogástrico',
    type: 'invasive',
    materials: [
      'Sonda Nasogástrica (Levin) calibre adecuado',
      'Lubricante hidrosoluble',
      'Jeringa de 50cc (pico catéter)',
      'Fonendoscopio',
      'Cinta adhesiva hipoalérgica / Fijador',
      'Vaso con agua y pitillo (si no hay contraindicación)',
      'Guantes limpios',
      'Gasas y toalla'
    ],
    steps: [
      'Informar al paciente y posicionar en Fowler alto (90°).',
      'Medir la distancia (Nariz - Lóbulo oreja - Apéndice xifoides).',
      'Lubricar la punta de la sonda (aprox. 10cm).',
      'Insertar suavemente por la narina hacia la faringe.',
      'Pedir al paciente que trague mientras se avanza rápidamente.',
      'Verificar ubicación: aspirar contenido gástrico o insuflar aire auscultando epigastrio.',
      'Fijar la sonda de forma segura sin presionar la narina.',
      'Conectar a drenaje o dejar pinzada según indicación.'
    ],
    biosecurity: [
      'Uso de guantes, tapabocas y protección ocular.',
      'Riesgo de tos o emesis durante la inserción.',
      'Verificar siempre permeabilidad antes de administrar nutrición.'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'foley',
    name: 'Sondaje Vesical (Foley)',
    type: 'invasive',
    materials: [
      'Sonda Foley (calibre según indicación)',
      'Bolsa recolectora de orina (circuito cerrado)',
      'Guantes estériles y guantes limpios',
      'Campo estéril hendido',
      'Solución antiséptica (Yodopovidona o Clorhexidina)',
      'Lubricante urológico estéril (Lidocaína jalea)',
      'Jeringa de 10cc con agua destilada',
      'Kit de aseo perineal',
      'Gasas estériles'
    ],
    steps: [
      'Privacidad del paciente y aseo perineal previo.',
      'Lavado de manos y apertura técnica de equipo estéril.',
      'Colocación de guantes estériles y campo.',
      'Lubricar la uretra (u hombres) o la punta de la sonda.',
      'Introducir la sonda hasta visualizar retorno de orina.',
      'Inflar el balón de autorretención con 10cc de agua destilada.',
      'Traccionar suavemente y conectar al sistema de drenaje.',
      'Fijar la sonda en el muslo para evitar tracción uretral.'
    ],
    biosecurity: [
      'Técnica aséptica estricta (prevención de ITU asociada a catéter).',
      'Mantener la bolsa recolectora por debajo del nivel de la vejiga.',
      'Higiene diaria del meato urinario.'
    ],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'intub',
    name: 'Intubación Endotraqueal',
    type: 'invasive',
    materials: [
      'Laringoscopio con hojas (Curva/Recta)',
      'Tubo endotraqueal (TET) - Calibre adecuado',
      'Fiador o guía',
      'Jeringa de 10cc (para inflar balón)',
      'Dispositivo bolsa-válvula-mascarilla (AMBU)',
      'Fuente de Oxígeno',
      'Sistema de succión y sondas',
      'Fijador de tubo',
      'Monitor de signos vitales y capnografía'
    ],
    steps: [
      'Preparar equipo y verificar balón del tubo.',
      'Preoxigenar al paciente al 100% durante 3-5 min.',
      'Administrar medicación de inducción y parálisis (Secuencia Rápida).',
      'Alinear ejes (posición de olfateo).',
      'Laringoscopia directa y visualización de cuerdas vocales.',
      'Inserción del TET hasta la marca adecuada (21-23 cm).',
      'Inflar el manguito (cuff) y verificar posición (Auscultación/Capnografía).',
      'Fijar el tubo y conectar a ventilación mecánica o AMBU.'
    ],
    biosecurity: [
      'Protección facial completa (monogafas, careta, tapabocas N95).',
      'Uso de guantes limpios.',
      'Riesgo alto de aerosolización.'
    ],
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pl',
    name: 'Punción Lumbar',
    type: 'invasive',
    materials: [
      'Kit de punción lumbar (Aguja de Quincke o atraumática)',
      'Manómetro de presión de LCR',
      'Tubos de recolección estériles (mínimo 3)',
      'Campos y gasas estériles',
      'Solución antiséptica',
      'Anestésico local (Lidocaína 1%)',
      'Jeringas y agujas para infiltración'
    ],
    steps: [
      'Posicionar al paciente (Decúbito lateral o sentado con espalda arqueada).',
      'Localizar espacio intervertebral (L3-L4 o L4-L5).',
      'Lavado quirúrgico, guantes estériles y asepsia de la zona.',
      'Colocar campo estéril e infiltrar anestesia local.',
      'Insertar aguja de punción con el bisel paralelo a las fibras.',
      'Sentir la "pérdida de resistencia" al atravesar el duramadre.',
      'Retirar estilete, medir presión de apertura y recolectar LCR.',
      'Reinsertar estilete, retirar aguja y aplicar apósito.'
    ],
    biosecurity: [
      'Técnica estéril rigurosa (riesgo de meningitis iatrogénica).',
      'Uso de tapabocas, bata y guantes estériles.',
      'Manejo cuidadoso de muestras biológicas.'
    ],
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033742?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tora',
    name: 'Toracocentesis (Drenaje Pleural)',
    type: 'invasive',
    materials: [
      'Cánula de toracocentesis o aguja de gran calibre',
      'Llave de tres vías y sistema de extensión',
      'Bolsa recolectora o frascos para vacío',
      'Jeringas de 20-50cc',
      'Anestesia local y antiséptico',
      'Campos y gasas estériles'
    ],
    steps: [
      'Confirmar sitio de punción (Clínica/Ecografía).',
      'Paciente sentado con brazos apoyados en mesa auxiliar.',
      'Asépsia profunda e infiltración de anestésico local hasta pleura parietal.',
      'Insertar aguja/catéter por el borde superior de la costilla inferior.',
      'Aspirar líquido para confirmar ubicación.',
      'Drenar cantidad necesaria (no exceder 1500cc por sesión).',
      'Retirar catéter en espiración forzada o maniobra de Valsalva.',
      'Control radiográfico post-procedimiento.'
    ],
    biosecurity: [
      'Riesgo de neumotórax o hemotórax.',
      'Uso de técnica estéril completa.',
      'Evitar entrada de aire al sistema durante el drenaje.'
    ],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'para',
    name: 'Paracentesis (Drenaje de Ascitis)',
    type: 'invasive',
    materials: [
      'Abocath de calibre grueso (14-16G) o kit de paracentesis',
      'Sistema de venoclisis y llave de tres vías',
      'Frascos recolectores o bolsa de drenaje',
      'Solución antiséptica y anestesia local',
      'Apósito estéril'
    ],
    steps: [
      'Verificar vaciado vesical previo.',
      'Posicionar al paciente en decúbito supino levemente ladeado.',
      'Ubicar sitio (generalmente fosa ilíaca izquierda, unión tercio externo y medio).',
      'Asepsia y anestesia local cutánea y peritoneal.',
      'Introducir aguja con técnica de "Z" para evitar fugas posteriores.',
      'Conectar sistema de drenaje al obtener líquido citrino/hemático.',
      'Extraer muestras para laboratorio.',
      'Finalizar, retirar aguja y realizar compresión en el sitio.'
    ],
    biosecurity: [
      'Riesgo de peritonitis bacteriana o perforación intestinal.',
      'Considerar reposición de Albúmina si el drenaje es >5 litros.',
      'Técnica aséptica.'
    ],
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aga',
    name: 'Gasometría Arterial (AGA)',
    type: 'invasive',
    materials: [
      'Jeringa pre-heparinizada para gases',
      'Aguja calibre 22-25G',
      'Gasas y alcohol / antiséptico',
      'Hielo para transporte de muestra',
      'Guantes limpios'
    ],
    steps: [
      'Realizar test de Allen para verificar circulación colateral.',
      'Palpar pulso arterial (Radial es primera elección).',
      'Asepsia de la zona.',
      'Punzar en ángulo de 45° (radial) hasta ver llenado pulsátil automático.',
      'Extraer 1-2cc de sangre arterial.',
      'Retirar aguja y realizar compresión firme (mín. 5 min).',
      'Eliminar burbujas de aire de la jeringa y tapar herméticamente.',
      'Enviar inmediatamente al laboratorio en medio frío.'
    ],
    biosecurity: [
      'Riesgo de hematoma o isquemia distal.',
      'Uso de guantes por exposición a sangre.',
      'Eliminación de aguja en guardián inmediatamente.'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ecg',
    name: 'Electrocardiograma (ECG)',
    type: 'non-invasive',
    materials: [
      'Electrocardiógrafo',
      'Electrodos desechables o ventosas',
      'Gel conductor / Alcohol',
      'Papel termosensible para ECG',
      'Gillette (si requiere rasurado)'
    ],
    steps: [
      'Explicar el procedimiento y retirar objetos metálicos.',
      'Paciente en decúbito supino, relajado y sin hablar.',
      'Limpiar piel en sitios de conexión.',
      'Colocar electrodos periféricos (R, L, F, N).',
      'Colocar electrodos precordiales (V1 a V6) en espacios intercostales.',
      'Configurar equipo (25mm/seg y 10mm/mV).',
      'Realizar captura del trazado en 12 derivaciones.',
      'Revisar la calidad del trazado antes de retirar electrodos.'
    ],
    biosecurity: [
      'Higiene de manos.',
      'Limpieza de cables y peras entre usos.',
      'Respetar la intimidad del paciente.'
    ],
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'iv-perif',
    name: 'Venopunción Periférica',
    type: 'invasive',
    materials: [
      'Catéter venoso periférico (Abocath) calibres 18G, 20G, 22G',
      'Torniquete (Smarck)',
      'Solución antiséptica (Alcohol 70% o Clorhexidina)',
      'Apósito transparente (Tegaderm)',
      'Equipo de venoclisis o extensión con llave de 3 vías',
      'Guantes limpios',
      'Gasas estériles'
    ],
    steps: [
      'Informar al paciente y seleccionar vena (preferiblemente miembro no dominante).',
      'Colocar el torniquete 10-15 cm por encima del sitio elegido.',
      'Realizar desinfección del área con movimientos circulares o de arrastre.',
      'Insertar el catéter con el bisel hacia arriba en ángulo de 15-30°.',
      'Observar retorno sanguíneo en la cámara y avanzar el catéter retirando la aguja.',
      'Presionar la vena por encima del catéter, retirar torniquete y conectar sistema.',
      'Fijar con apósito transparente y rotular (fecha, calibre, responsable).',
      'Verificar permeabilidad y ausencia de signos de flebitis.'
    ],
    biosecurity: [
      'Uso de guantes limpios.',
      'Desecho de aguja en guardián de seguridad.',
      'Evitar punciones innecesarias.'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'secr-asp',
    name: 'Aspiración de Secreciones',
    type: 'invasive',
    materials: [
      'Sistema de succión (Vacío)',
      'Sonda de aspiración estéril (calibre según vía)',
      'Guantes estériles y limpios',
      'Solución salina 0.9% (para lavado de sonda)',
      'Conector en Y (si no lo tiene la sonda)',
      'Tapabocas y protección ocular'
    ],
    steps: [
      'Valorar necesidad (ruidos audibles, caída de saturación).',
      'Hiperoxigenar al paciente (si está ventilado) al 100%.',
      'Introducir la sonda suavemente sin realizar succión.',
      'Retirar la sonda con movimientos rotatorios realizando succión intermitente (máx 10-15 seg).',
      'Limpiar la sonda con solución salina.',
      'Permitir recuperación del paciente entre aspiraciones.',
      'Auscultar campos pulmonares post-procedimiento.',
      'Desechar material y registrar características de las secreciones.'
    ],
    biosecurity: [
      'Uso estricto de técnica aséptica en vía aérea artificial.',
      'Protección contra aerosoles.',
      'No forzar la introducción de la sonda.'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'curacion',
    name: 'Curación de Heridas',
    type: 'non-invasive',
    materials: [
      'Kit de curación estéril (pinzas, tijeras)',
      'Solución salina 0.9%',
      'Antiséptico según protocolo',
      'Gasas estériles',
      'Apósitos o vendajes',
      'Guantes estériles y limpios',
      'Cinta adhesiva micropore o transpore'
    ],
    steps: [
      'Retirar vendaje anterior con guantes limpios observando características.',
      'Lavado de manos y colocación de guantes estériles.',
      'Limpieza de la herida con solución salina desde el centro a la periferia (o de limpio a sucio).',
      'Secar la herida con gasas estériles mediante toques suaves.',
      'Aplicar medicamento o apósito primario si está indicado.',
      'Cubrir con apósito secundario y fijar adecuadamente.',
      'Registrar estado de la herida (bordes, exudado, olor, tamaño).'
    ],
    biosecurity: [
      'Mantener esterilidad del instrumental.',
      'Desechar apósitos contaminados en bolsa roja.',
      'Evitar cruce de microorganismos entre heridas.'
    ],
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446f21?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lavado-g',
    name: 'Lavado Gástrico',
    type: 'invasive',
    materials: [
      'Sonda orogástrica o nasogástrica de gran calibre (32-36 Fr en adultos)',
      'Solución salina 0.9% a temperatura ambiente (2-3 litros)',
      'Jeringa de 50cc (pico catéter)',
      'Sistema de drenaje o bolsa recolectora',
      'Lubricante hidrosoluble',
      'Fonendoscopio'
    ],
    steps: [
      'Colocar al paciente en decúbito lateral izquierdo con pies elevados (Trendelenburg leve).',
      'Medir e insertar la sonda verificando ubicación.',
      'Introducir 200-300 ml de solución salina.',
      'Extraer el líquido por gravedad o aspiración suave.',
      'Repetir el ciclo hasta que el líquido salga claro o se complete la dosis.',
      'Considerar administración de carbón activado si está indicado.',
      'Retirar la sonda previa pinzamiento para evitar aspiración.',
      'Vigilar estado de conciencia y riesgo de broncoaspiración.'
    ],
    biosecurity: [
      'Asegurar vía aérea si el paciente tiene Glasgow < 8.',
      'Uso de EPP completo ante riesgo de emesis.',
      'Control estricto de líquidos introducidos vs eliminados.'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cardiover',
    name: 'Cardioversión Eléctrica',
    type: 'invasive',
    materials: [
      'Desfibrilador manual con modo sincrónico',
      'Paletas o parches adhesivos conductores',
      'Gel conductor (si usa paletas)',
      'Equipo de reanimación avanzada (Coche de paro)',
      'Monitorización ECG, SpO2 y TA',
      'Sedación y analgesia (Midazolam/Fentanilo)'
    ],
    steps: [
      'Explicar el procedimiento y obtener consentimiento.',
      'Asegurar acceso venoso y monitorización continua.',
      'Administrar sedación profunda.',
      'Activar el modo "SYNC" en el desfibrilador (verificar marca en la onda R).',
      'Seleccionar carga (según protocolo: 50J, 100J, etc.).',
      'Colocar parches o paletas con gel.',
      'Cargar y asegurar que nadie toque al paciente ("¡Fuera todos!").',
      'Presionar botón de descarga manteniendo presión (si son paletas) hasta el choque.',
      'Evaluar ritmo post-choque y estado del paciente.'
    ],
    biosecurity: [
      'Seguridad eléctrica para el personal.',
      'Asegurar vía aérea durante la sedación.',
      'Tener equipo de intubación listo.'
    ],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'med-parent',
    name: 'Vías Parenterales (IM / SC / ID)',
    type: 'invasive',
    materials: [
      'Jeringas de 1cc, 3cc, 5cc o 10cc',
      'Agujas según vía (IM: 21G, SC: 25G, ID: 27G)',
      'Medicamento indicado',
      'Torundas de algodón con alcohol',
      'Guantes limpios'
    ],
    steps: [
      'Verificar los "10 correctos" de administración.',
      'Cargar el medicamento con técnica aséptica.',
      'Identificar sitio anatómico (IM: Glúteo, Deltoides; SC: Abdomen, Peritrocantereo).',
      'Desinfectar la piel.',
      'Insertar aguja (IM: 90°, SC: 45°, ID: 10-15°).',
      'Aspirar (en IM) para verificar que no esté en vaso sanguíneo.',
      'Inyectar lentamente el fármaco.',
      'Retirar aguja y presionar suavemente sin masajear (en SC/ID).'
    ],
    biosecurity: [
      'No reencapuchar agujas.',
      'Higiene de manos.',
      'Desecho inmediato en contenedor rígido.'
    ],
    image: 'https://images.unsplash.com/photo-1579153123746-8577e3d05ff1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wound-care',
    name: 'Curación de Heridas (Técnica Estéril)',
    type: 'invasive',
    materials: [
      'Equipo de curación estéril (pinzas, tijeras)',
      'Solución salina 0.9%',
      'Gasas estériles',
      'Guantes estériles y limpios',
      'Apósitos según tipo de herida',
      'Cinta quirúrgica o vendaje'
    ],
    steps: [
      'Lavado de manos y colocación de guantes limpios.',
      'Retirar el apósito sucio y observar características de la herida.',
      'Retirar guantes sucios, lavado de manos y colocar guantes estériles.',
      'Limpiar la herida con solución salina desde el centro a la periferia.',
      'Secar con gasa mediante toques suaves.',
      'Aplicar medicamento o apósito primario si está indicado.',
      'Cubrir con apósito secundario y fijar.'
    ],
    biosecurity: [
      'Uso de técnica aséptica rigurosa.',
      'Desecho de material contaminado en bolsa roja.',
      'Uso de EPP según riesgo de salpicaduras.'
    ],
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aspiration',
    name: 'Aspiración de Secreciones',
    type: 'invasive',
    materials: [
      'Sonda de aspiración de calibre adecuado',
      'Sistema de succión (vacío)',
      'Guantes estériles',
      'Agua estéril o solución salina',
      'Tapabocas y protección ocular'
    ],
    steps: [
      'Explicar el procedimiento y auscultar campos pulmonares.',
      'Hiperoxigenar al paciente (si está ventilado).',
      'Colocarse EPP y guante estéril en la mano dominante.',
      'Introducir la sonda sin succionar hasta el tope.',
      'Retirar la sonda con movimientos rotatorios succionando de forma intermitente (máx. 10-15 seg).',
      'Limpiar la sonda y repetir si es necesario tras descanso.',
      'Auscultar nuevamente y registrar características de secreciones.'
    ],
    biosecurity: [
      'Técnica estéril para evitar neumonías asociadas.',
      'Protección contra aerosoles.',
      'No forzar la entrada de la sonda.'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bed-bath',
    name: 'Higiene del Paciente Encamado',
    type: 'non-invasive',
    materials: [
      'Palangana con agua tibia',
      'Jabón líquido neutro',
      'Esponjas o paños desechables',
      'Toallas limpias',
      'Ropa de cama limpia y pijama',
      'Guantes limpios'
    ],
    steps: [
      'Informar al paciente y asegurar su privacidad.',
      'Lavar cara, cuello y orejas (sin jabón si es posible).',
      'Lavar brazos, manos, tórax y abdomen.',
      'Lavar piernas y pies.',
      'Posicionar al paciente de lado para lavar espalda y glúteos.',
      'Realizar aseo genital (de limpio a sucio).',
      'Secar minuciosamente los pliegues cutáneos.',
      'Vestir al paciente y cambiar ropa de cama.'
    ],
    biosecurity: [
      'Mantener la mecánica corporal adecuada.',
      'Evitar enfriamientos innecesarios.',
      'Vigilar integridad de la piel durante el baño.'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'postural-changes',
    name: 'Cambios Posturales y Prevención de UPP',
    type: 'non-invasive',
    materials: [
      'Almohadas o cojines posicionadores',
      'Sábanas de movimiento',
      'Crema hidratante o ácidos grasos hiperoxigenados',
      'Dispositivos de descarga (taloneras)'
    ],
    steps: [
      'Evaluar el riesgo del paciente (Escala de Braden/Norton).',
      'Establecer un plan de rotación (cada 2-3 horas).',
      'Alternar posiciones: Decúbito supino, lateral izquierdo y derecho.',
      'Evitar el contacto de prominencias óseas entre sí mediante almohadas.',
      'Realizar masajes suaves o aplicar ácidos grasos en zonas de riesgo.',
      'Asegurar que las sábanas estén limpias, secas y sin arrugas.',
      'Fomentar la movilización temprana si es posible.'
    ],
    biosecurity: [
      'No realizar masajes sobre zonas ya enrojecidas.',
      'Uso de mecánica corporal para evitar lesiones del personal.',
      'Evitar el cizallamiento al movilizar al paciente.'
    ],
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033742?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'enema',
    name: 'Administración de Enema',
    type: 'invasive',
    materials: [
      'Solución para enema (evacuante o medicado)',
      'Sonda rectal o dispositivo aplicador',
      'Lubricante hidrosoluble',
      'Sistema de irrigación (si se requiere)',
      'Guantes limpios',
      'Soporte para suero (si aplica)',
      'Cuña o acceso a baño'
    ],
    steps: [
      'Informar al paciente y colocar en posición de Sims (decúbito lateral izquierdo).',
      'Lubricar la punta de la sonda rectal.',
      'Insertar suavemente la sonda (7-10 cm en adultos).',
      'Administrar la solución lentamente a temperatura ambiente.',
      'Retirar sonda y pedir al paciente que retenga el líquido (5-10 min).',
      'Asistir al paciente para la evacuación.',
      'Limpiar zona anal y registrar resultados.'
    ],
    biosecurity: [
      'Uso de guantes y delantal protector.',
      'Suspender si hay dolor intenso o resistencia.',
      'Vigilar signos de respuesta vagal.'
    ],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
  }
];

export const DRUGS: Drug[] = [
  {
    id: 'fenta',
    name: 'Fentanilo',
    group: 'Analgésico Opioide',
    mechanism: 'Agonista de receptores mu-opioides.',
    dosage: 'Adultos: 50-100 mcg bolo. Peds: 1-3 mcg/kg.',
    route: 'Intravenosa (IV), Intramuscular (IM)',
    contraindications: [
      'Hipersensibilidad a opioides',
      'Depresión respiratoria grave',
      'Trauma craneoencefálico grave'
    ]
  },
  {
    id: 'mida',
    name: 'Midazolam',
    group: 'Benzodiazepina / Sedante',
    mechanism: 'Facilita la acción del GABA en el SNC.',
    dosage: 'Adultos: 1-5 mg bolo. Peds: 0.1-0.2 mg/kg.',
    route: 'IV, IM, Intranasal',
    contraindications: [
      'Glaucoma de ángulo cerrado',
      'Miastenia gravis',
      'Insuficiencia respiratoria severa'
    ]
  },
  {
    id: 'adre',
    name: 'Adrenalina',
    group: 'Adrenérgico (Catecolamina)',
    mechanism: 'Agonista alfa y beta adrenérgico.',
    dosage: 'RCP: 1 mg cada 3-5 min. Peds: 0.01 mg/kg.',
    route: 'IV, Intraósea (IO), Subcutánea (SC), IM',
    contraindications: [
      'Arritmias ventriculares graves',
      'Hipertensión no controlada',
      'Glaucoma de ángulo estrecho'
    ]
  },
  {
    id: 'nora',
    name: 'Noradrenalina',
    group: 'Vasopresor / Inotrópico',
    mechanism: 'Estimulante alfa-1 y beta-1 adrenérgico.',
    dosage: 'Infusión: 0.05 - 0.5 mcg/kg/min.',
    route: 'Vía Central (Exclusivo)',
    contraindications: [
      'Hipovolemia no corregida',
      'Trombosis vascular periférica',
      'Hipotensión por déficit de volumen'
    ]
  },
  {
    id: 'amio',
    name: 'Amiodarona',
    group: 'Antiarrítmico Clase III',
    mechanism: 'Prolonga el potencial de acción y periodo refractario.',
    dosage: 'RCP: 300 mg inicial. Peds: 5 mg/kg.',
    route: 'IV (Dextrosa 5% únicamente)',
    contraindications: [
      'Bloqueo AV de 2º o 3º grado',
      'Bradicardia sinusal severa',
      'Shock cardiogénico'
    ]
  },
  {
    id: 'prop',
    name: 'Propofol',
    group: 'Hipnótico de acción corta',
    mechanism: 'Agonista de receptores GABA-A.',
    dosage: 'Inducción: 1.5 - 2.5 mg/kg.',
    route: 'IV',
    contraindications: [
      'Alergia al huevo o proteína de soja',
      'Hipotensión grave',
      'Niños menores de un mes'
    ]
  },
  {
    id: 'dopa',
    name: 'Dopamina',
    group: 'Inotrópico / Vasopresor',
    mechanism: 'Estimula receptores dopaminérgicos y adrenérgicos.',
    dosage: '2-20 mcg/kg/min según efecto buscado.',
    route: 'IV (Preferible vía central)',
    contraindications: [
      'Feocromocitoma',
      'Taquiarritmias ventriculares',
      'Fibrilación ventricular'
    ]
  }
];

export const PATHOLOGIES: Pathology[] = [
  {
    id: 'iam',
    name: 'Infarto Agudo de Miocardio (IAM)',
    system: 'Cardiovascular',
    definition: 'Muerte de tejido cardíaco por falta de riego sanguíneo.',
    affectedTarget: 'Miocardio (Células del músculo cardíaco)',
    symptoms: [
      'Dolor retroesternal opresivo',
      'Diaforesis (sudoración fría)',
      'Disnea (dificultad respiratoria)',
      'Náuseas/vómitos'
    ],
    nursingCare: [
      'Reposo absoluto y monitorización continua.',
      'Administración de Oxígeno si SpO2 < 94%.',
      'Acceso venoso periférico de grueso calibre.',
      'Toma de EKG de 12 derivaciones (prioridad).',
      'Manejo del dolor (Escala EVA).'
    ]
  },
  {
    id: 'epoc',
    name: 'EPOC Exacerbado',
    system: 'Respiratorio',
    definition: 'Obstrucción crónica y progresiva del flujo de aire.',
    affectedTarget: 'Alvéolos y bronquiolos pulmonares',
    symptoms: [
      'Aumento de disnea',
      'Aumento de producción de esputo',
      'Sibilancias',
      'Uso de músculos accesorios'
    ],
    nursingCare: [
      'Posición fowler o semi-fowler.',
      'Oxigenoterapia controlada (objetivo SpO2 88-92%).',
      'Administración de broncodilatadores y corticoides.',
      'Vigilancia de signos de fatiga muscular respiratoria.'
    ]
  },
  {
    id: 'ic',
    name: 'Insuficiencia Cardíaca Congestiva (ICC)',
    system: 'Cardiovascular',
    definition: 'Falla del corazón para bombear suficiente sangre.',
    affectedTarget: 'Ventrículos cardíacos',
    symptoms: [
      'Edema en miembros inferiores',
      'Disnea paroxística nocturna',
      'Ortopnea',
      'Ingurgitación yugular'
    ],
    nursingCare: [
      'Control estricto de líquidos (ingesta y eliminación).',
      'Pesaje diario del paciente.',
      'Posición fowler para mejorar la expansión pulmonar.',
      'Monitoreo de electrolitos (especialmente Potasio).'
    ]
  },
  {
    id: 'neumo',
    name: 'Neumonía Adquirida en Comunidad',
    system: 'Respiratorio',
    definition: 'Infección aguda del parénquima pulmonar.',
    affectedTarget: 'Parénquima pulmonar (alvéolos)',
    symptoms: [
      'Fiebre y escalofríos',
      'Tos productiva purulenta',
      'Dolor torácico pleurítico',
      'Taquipnea'
    ],
    nursingCare: [
      'Fomentar la hidratación para fluidificar secreciones.',
      'Estimular deambulación temprana y cambios de posición.',
      'Administración de antibioticoterapia según horario.',
      'Terapia respiratoria.'
    ]
  },
  {
    id: 'ira',
    name: 'Insuficiencia Renal Aguda (IRA)',
    system: 'Renal',
    definition: 'Pérdida rápida de la función filtrante del riñón.',
    affectedTarget: 'Nefronas (Unidad funcional del riñón)',
    symptoms: [
      'Oliguria o anuria',
      'Edema generalizado',
      'Náuseas y debilidad',
      'Alteración del estado mental'
    ],
    nursingCare: [
      'Balance hídrico riguroso cada 6 horas.',
      'Vigilancia de signos de hiperpotasemia.',
      'Control de peso diario.',
      'Ajuste de dosis de medicamentos según aclaramiento.'
    ]
  },
  {
    id: 'acv',
    name: 'Evento Cerebrovascular (ACV)',
    system: 'Neurológico',
    definition: 'Interrupción súbita del flujo sanguíneo al cerebro.',
    affectedTarget: 'Neuronas y vasos sanguíneos cerebrales',
    symptoms: [
      'Asimetría facial',
      'Hemiparesia o hemiplejía',
      'Disartria o afasia',
      'Cefalea intensa súbita'
    ],
    nursingCare: [
      'Valoración neurológica frecuente (Escala de Glasgow).',
      'Mantener cabecera a 30°.',
      'Prevención de broncoaspiración.',
      'Vigilancia de la presión arterial media (PAM).'
    ]
  },
  {
    id: 'cad',
    name: 'Cetoacidosis Diabética (CAD)',
    system: 'Endocrino',
    definition: 'Crisis hiperglucémica con presencia de cuerpos cetónicos.',
    affectedTarget: 'Células beta pancreáticas (déficit de insulina) y metabolismo celular',
    symptoms: [
      'Respiración de Kussmaul',
      'Aliento cetónico',
      'Poliuria y polidipsia intensa',
      'Dolor abdominal'
    ],
    nursingCare: [
      'Administración de insulina cristalina en infusión.',
      'Reposición agresiva de líquidos.',
      'Control de glucometría cada hora.',
      'Monitoreo estricto de Potasio sérico.'
    ]
  },
  {
    id: 'angina',
    name: 'Angina Inestable',
    system: 'Cardiovascular',
    definition: 'Dolor torácico que ocurre en reposo o con esfuerzo mínimo, indicativo de isquemia miocárdica inminente.',
    affectedTarget: 'Arterias Coronarias',
    symptoms: ['Dolor torácico opresivo que no cede', 'Diaforesis', 'Náuseas', 'Ansiedad'],
    nursingCare: ['Monitorización de signos vitales', 'Administración de Nitroglicerina sublingual si hay dolor', 'Mantenimiento de acceso venoso', 'EKG seriados']
  },
  {
    id: 'pericarditis',
    name: 'Pericarditis Aguda',
    system: 'Cardiovascular',
    definition: 'Inflamación del pericardio, a menudo de origen viral o idiopático.',
    affectedTarget: 'Pericardio (Saco que rodea el corazón)',
    symptoms: ['Dolor torácico que mejora al inclinarse hacia adelante', 'Frote pericárdico', 'Fiebre leve'],
    nursingCare: ['Control del dolor con AINEs', 'Reposo en cama', 'Vigilancia de signos de taponamiento cardíaco']
  },
  {
    id: 'endocarditis',
    name: 'Endocarditis Infecciosa',
    system: 'Cardiovascular',
    definition: 'Infección de las válvulas cardíacas o del endocardio posterior.',
    affectedTarget: 'Válvulas cardíacas',
    symptoms: ['Fiebre prolongada', 'Soplos cardíacos nuevos', 'Petequias', 'Fatiga'],
    nursingCare: ['Administración prolongada de antibióticos IV', 'Control de la temperatura', 'Vigilancia de signos de insuficiencia cardíaca']
  },
  {
    id: 'miocarditis',
    name: 'Miocarditis',
    system: 'Cardiovascular',
    definition: 'Inflamación del músculo cardíaco (miocardio).',
    affectedTarget: 'Miocardio',
    symptoms: ['Dolor torácico', 'Arritmias', 'Disnea', 'Signos de fatiga'],
    nursingCare: ['Reposo absoluto', 'Monitorización cardíaca continua', 'Oxigenoterapia si es necesario']
  },
  {
    id: 'aaa',
    name: 'Aneurisma de Aorta Abdominal (AAA)',
    system: 'Cardiovascular',
    definition: 'Dilatación localizada de la aorta abdominal.',
    affectedTarget: 'Aorta Abdominal',
    symptoms: ['Masa abdominal pulsátil', 'Dolor lumbar o abdominal sordo', 'Soplo abdominal'],
    nursingCare: ['Control estricto de la presión arterial', 'Evitar maniobras de Valsalva', 'Preparación para cirugía si hay rotura']
  },
  {
    id: 'tvp',
    name: 'Trombosis Venosa Profunda (TVP)',
    system: 'Cardiovascular',
    definition: 'Formación de un coágulo de sangre en una vena profunda.',
    affectedTarget: 'Venas de extremidades inferiores',
    symptoms: ['Edema unilateral', 'Dolor en la pantorrilla', 'Calor y eritema local'],
    nursingCare: ['Reposo en cama inicial', 'Administración de anticoagulantes', 'Medición de la circunferencia de la extremidad']
  },
  {
    id: 'ea',
    name: 'Estenosis Aórtica',
    system: 'Cardiovascular',
    definition: 'Estrechamiento de la apertura de la válvula aórtica.',
    affectedTarget: 'Válvula Aórtica',
    symptoms: ['Síncope de esfuerzo', 'Angina', 'Disnea'],
    nursingCare: ['Evitar esfuerzos físicos extenuantes', 'Monitoreo de signos de bajo gasto cardíaco', 'Control de la hidratación']
  },
  {
    id: 'im',
    name: 'Insuficiencia Mitral',
    system: 'Cardiovascular',
    definition: 'Reflujo de sangre desde el ventrículo izquierdo a la aurícula izquierda.',
    affectedTarget: 'Válvula Mitral',
    symptoms: ['Fatiga', 'Disnea de esfuerzo', 'Palpitaciones'],
    nursingCare: ['Control de la precarga con diuréticos', 'Monitorización de la SatO2', 'Posición fowler']
  },
  {
    id: 'fa',
    name: 'Fibrilación Auricular (FA)',
    system: 'Cardiovascular',
    definition: 'Arritmia supraventricular caracterizada por una activación auricular desorganizada.',
    affectedTarget: 'Aurículas cardíacas',
    symptoms: ['Palpitaciones irregulares', 'Mareo', 'Disnea', 'Pulso irregular'],
    nursingCare: ['Monitorización del ritmo cardíaco', 'Control de la frecuencia con beta-bloqueantes', 'Administración de anticoagulantes']
  },
  {
    id: 'asma',
    name: 'Asma Bronquial (Crisis)',
    system: 'Respiratorio',
    definition: 'Inflamación crónica de las vías respiratorias que causa hiperreactividad bronquial.',
    affectedTarget: 'Vías respiratorias bajas (Bronquios)',
    symptoms: ['Sibilancias expiratorias', 'Tos seca', 'Opresión torácica', 'Taquipnea'],
    nursingCare: ['Administración de broncodilatadores (puf/nebulización)', 'Oxigenoterapia según SatO2', 'Posición sentada', 'Control de FR']
  },
  {
    id: 'bronquitis',
    name: 'Bronquitis Aguda',
    system: 'Respiratorio',
    definition: 'Inflamación transitoria de los bronquios principales.',
    affectedTarget: 'Bronquios',
    symptoms: ['Tos productiva', 'Dolor retroesternal al toser', 'Fiebre leve'],
    nursingCare: ['Incrementar ingesta hídrica', 'Fisioterapia respiratoria', 'Control de la temperatura']
  },
  {
    id: 'derrame',
    name: 'Derrame Pleural',
    system: 'Respiratorio',
    definition: 'Acumulación anómala de líquido en el espacio pleural.',
    affectedTarget: 'Pleura (Espacio pleural)',
    symptoms: ['Dolor pleurítico', 'Disnea', 'Matidez a la percusión', 'Ausencia de ruidos respiratorios'],
    nursingCare: ['Asistencia en la toracocentesis', 'Control de la función respiratoria', 'Manejo del dolor']
  },
  {
    id: 'neumotorax',
    name: 'Neumotórax',
    system: 'Respiratorio',
    definition: 'Presencia de aire en el espacio pleural que causa colapso pulmonar.',
    affectedTarget: 'Espacio Pleural',
    symptoms: ['Dolor torácico súbito', 'Disnea súbita', 'Desviación traqueal (en tensión)', 'Timpanismo'],
    nursingCare: ['Preparación y control del tubo de tórax', 'Monitorización de la mecánica ventilatoria', 'Control de drenaje']
  },
  {
    id: 'absceso',
    name: 'Absceso Pulmonar',
    system: 'Respiratorio',
    definition: 'Lesión necrótica del parénquima pulmonar que contiene pus.',
    affectedTarget: 'Parénquima pulmonar',
    symptoms: ['Fiebre héctica', 'Tos con vómica (expectoración purulenta abundante)', 'Pérdida de peso'],
    nursingCare: ['Fisioterapia respiratoria y drenaje postural', 'Administración de antibióticos IV', 'Nutrición hiperproteica']
  },
  {
    id: 'tbc',
    name: 'Tuberculosis Pulmonar',
    system: 'Respiratorio',
    definition: 'Enfermedad infecciosa causada por Mycobacterium tuberculosis.',
    affectedTarget: 'Pulmones (principalmente ápices)',
    symptoms: ['Tos por más de 15 días', 'Hemoptisis', 'Sudoración nocturna', 'Pérdida de peso'],
    nursingCare: ['Aislamiento respiratorio (Presión negativa)', 'Administración de esquema antituberculoso', 'Educación sobre adherencia']
  },
  {
    id: 'bronquiectasias',
    name: 'Bronquiectasias',
    system: 'Respiratorio',
    definition: 'Dilataciones irreversibles de los bronquios secundarias a inflamación crónica.',
    affectedTarget: 'Pared bronquial',
    symptoms: ['Tos crónica productiva fétida', 'Acropaquia (dedos en palillo de tambor)', 'Hemoptisis recurrente'],
    nursingCare: ['Técnicas de higiene bronquial', 'Hidratación', 'Control de infecciones']
  },
  {
    id: 'eap',
    name: 'Edema Agudo de Pulmón (EAP)',
    system: 'Respiratorio',
    definition: 'Acumulación de líquido en los alvéolos que impide el intercambio gaseoso.',
    affectedTarget: 'Alvéolos pulmonares',
    symptoms: ['Disnea severa paroxística', 'Expectoración asalmonada/espumosa', 'Estertores crepitantes dispersos', 'Cianosis'],
    nursingCare: ['Posición de Fowler alta', 'Oxigenoterapia / VMNI', 'Administración de diuréticos y vasodilatadores']
  },
  {
    id: 'meningitis',
    name: 'Meningitis Bacteriana',
    system: 'Neurológico',
    definition: 'Inflamación de las meninges por infección bacteriana.',
    affectedTarget: 'Meninges (Piamadre y aracnoides)',
    symptoms: ['Rigidez de nuca', 'Fiebre alta', 'Vómitos en proyectil', 'Fotofobia'],
    nursingCare: ['Aislamiento de gotas', 'Monitorización de signos de hipertensión endocraneana', 'Administración de antibióticos precoces']
  },
  {
    id: 'epilepsia',
    name: 'Estado Epiléptico',
    system: 'Neurológico',
    definition: 'Actividad convulsiva continua por más de 5 minutos o crisis recurrentes sin recuperación.',
    affectedTarget: 'Corteza Cerebral',
    symptoms: ['Convulsiones generalizadas', 'Pérdida de conciencia prolongada', 'Cianosis'],
    nursingCare: ['Protección de la vía aérea y evitar lesiones', 'Administración de Benzodiacepinas IV', 'Cronometrar la duración de la crisis']
  },
  {
    id: 'parkinson',
    name: 'Enfermedad de Parkinson',
    system: 'Neurológico',
    definition: 'Trastorno neurodegenerativo de la sustancia negra.',
    affectedTarget: 'Ganglios basales (Sustancia negra)',
    symptoms: ['Temblor en reposo', 'Bradicinesia', 'Rigidez en "rueda dentada"', 'Inestabilidad postural'],
    nursingCare: ['Prevención de caídas', 'Asistencia en la alimentación y movilidad', 'Administración de Levodopa según horario']
  },
  {
    id: 'em',
    name: 'Esclerosis Múltiple',
    system: 'Neurológico',
    definition: 'Enfermedad autoinmune desmielinizante del SNC.',
    affectedTarget: 'Vainas de Mielina en el SNC',
    symptoms: ['Diplopía', 'Parestesias', 'Debilidad muscular', 'Alteraciones de la marcha'],
    nursingCare: ['Manejo de la fatiga', 'Prevención de úlceras por presión si hay inmovilidad', 'Soporte emocional']
  },
  {
    id: 'mg',
    name: 'Miastenia Gravis',
    system: 'Neurológico',
    definition: 'Trastorno neuromuscular autoinmune que afecta la placa motora.',
    affectedTarget: 'Receptores de Acetilcolina',
    symptoms: ['Ptosis palpebral', 'Diplopía', 'Debilidad muscular fluctuante', 'Disfagia'],
    nursingCare: ['Programar actividades cuando el efecto del medicamento es máximo', 'Vigilar signos de crisis miasténica (insuficiencia resp.)']
  },
  {
    id: 'gbs',
    name: 'Síndrome de Guillain-Barré',
    system: 'Neurológico',
    definition: 'Polineuropatía desmielinizante inflamatoria aguda.',
    affectedTarget: 'Nervios periféricos',
    symptoms: ['Parálisis ascendente simétrica', 'Arreflexia', 'Parestesias', 'Inestabilidad autonómica'],
    nursingCare: ['Monitoreo estrecho de la capacidad vital respiratoria', 'Fisioterapia para evitar contracturas', 'Soporte nutricional']
  },
  {
    id: 'alzheimer',
    name: 'Enfermedad de Alzheimer',
    system: 'Neurológico',
    definition: 'Demencia degenerativa primaria más común.',
    affectedTarget: 'Corteza cerebral y el hipocampo',
    symptoms: ['Pérdida de memoria reciente', 'Desorientación', 'Afasia', 'Apraxia'],
    nursingCare: ['Ambiente seguro y estructurado', 'Orientación a la realidad constante', 'Apoyo al cuidador principal']
  },
  {
    id: 'hsa',
    name: 'Hemorragia Subaracnoidea (HSA)',
    system: 'Neurológico',
    definition: 'Presencia de sangre en el espacio subaracnoideo, usualmente por ruptura de aneurisma.',
    affectedTarget: 'Vasos cerebrales subaracnoideos',
    symptoms: ['Cefalea súbita "la peor de la vida"', 'Vómitos', 'Pérdida de conciencia', 'Meningismo'],
    nursingCare: ['Ambiente tranquilo (oscuridad, silencio)', 'Control de la presión arterial', 'Evitar estreñimiento (Valsalva)']
  },
  {
    id: 'gastritis_c',
    name: 'Gastritis Crónica',
    system: 'Digestivo',
    definition: 'Inflamación prolongada de la mucosa gástrica, frecuentemente por H. pylori.',
    affectedTarget: 'Mucosa Gástrica',
    symptoms: ['Epigastralgia sorda', 'Saciedad precoz', 'Náuseas ocasionales'],
    nursingCare: ['Educación dietética (evitar irritantes)', 'Administración de IBP/Antiácidos', 'Fomentar la higiene de manos']
  },
  {
    id: 'ulcera',
    name: 'Úlcera Péptica',
    system: 'Digestivo',
    definition: 'Erosión en la mucosa del estómago o duodeno que penetra la muscularis mucosae.',
    affectedTarget: 'Estómago o Duodeno',
    symptoms: ['Dolor epigástrico que cede con alimentos (duodenal) o empeora (gástrica)', 'Hematemesis', 'Melena'],
    nursingCare: ['Vigilancia de signos de perforación o hemorragia', 'Administración de inhibidores de bomba de protones', 'Evitar AINEs']
  },
  {
    id: 'cirrosis',
    name: 'Cirrosis Hepática',
    system: 'Digestivo',
    definition: 'Estadio final de la fibrosis hepática con alteración de la arquitectura.',
    affectedTarget: 'Hígado',
    symptoms: ['Ictericia', 'Ascitis', 'Encefalopatía hepática', 'Aparición de varices esofágicas'],
    nursingCare: ['Control de perímetro abdominal', 'Dieta hiposódica', 'Valoración del estado neurológico (asterixis)']
  },
  {
    id: 'colecistitis',
    name: 'Colecistitis Aguda',
    system: 'Digestivo',
    definition: 'Inflamación de la vesícula biliar, generalmente por cálculos.',
    affectedTarget: 'Vesícula Biliar',
    symptoms: ['Dolor en hipocondrio derecho irradiado a hombro', 'Signo de Murphy positivo', 'Fiebre'],
    nursingCare: ['Ayuno (NPO)', 'Control del dolor', 'Preparación para colecistectomía']
  },
  {
    id: 'diverticulitis',
    name: 'Diverticulitis Aguda',
    system: 'Digestivo',
    definition: 'Inflamación o infección de los divertículos colónicos.',
    affectedTarget: 'Colon (especialmente Sigmoides)',
    symptoms: ['Dolor en fosa ilíaca izquierda', 'Fiebre', 'Alteración del hábito intestinal'],
    nursingCare: ['Dieta absoluta inicial', 'Antibioticoterapia', 'Control de signos de peritonitis']
  },
  {
    id: 'crohn',
    name: 'Enfermedad de Crohn',
    system: 'Digestivo',
    definition: 'Enfermedad inflamatoria intestinal que afecta cualquier parte del tubo digestivo.',
    affectedTarget: 'Todo el tracto GI (principalmente íleon distal)',
    symptoms: ['Diarrea crónica', 'Dolor abdominal', 'Fístulas perianales', 'Pérdida de peso'],
    nursingCare: ['Control del estado nutricional', 'Manejo de la diarrea y cuidado perianal', 'Apoyo psicológico']
  },
  {
    id: 'cu',
    name: 'Colitis Ulcerosa',
    system: 'Digestivo',
    definition: 'Enfermedad inflamatoria mucosa limitada al colon.',
    affectedTarget: 'Colon y Recto',
    symptoms: ['Rectorragia', 'Tenesmo rectal', 'Diarrea muco-sanguinolenta'],
    nursingCare: ['Vigilar signos de megacolon tóxico', 'Balance hídrico', 'Control de hemoglobina']
  },
  {
    id: 'glom',
    name: 'Glomerulonefritis Aguda',
    system: 'Renal',
    definition: 'Inflamación de los glomérulos renales, a menudo post-estreptocócica.',
    affectedTarget: 'Glomérulo Renal',
    symptoms: ['Hematuria macroscópica (orina color cola)', 'Hipertensión', 'Edema periorbitario', 'Oliguria'],
    nursingCare: ['Restricción de sodio y líquidos', 'Monitorización de la presión arterial', 'Pesaje diario']
  },
  {
    id: 'nefrotico',
    name: 'Síndrome Nefrótico',
    system: 'Renal',
    definition: 'Aumento severo de la permeabilidad glomerular a las proteínas.',
    affectedTarget: 'Membrana basal glomerular',
    symptoms: ['Edema masivo (Anasarca)', 'Proteinuria masiva (>3.5g/24h)', 'Hipoalbuminemia'],
    nursingCare: ['Monitoreo del edema y la piel', 'Restricción hídrica', 'Vigilancia de complicaciones infecciosas']
  },
  {
    id: 'pielon',
    name: 'Pielonefritis Aguda',
    system: 'Renal',
    definition: 'Infección del tracto urinario superior (parénquima renal y pelvis).',
    affectedTarget: 'Parénquima y pelvis renal',
    symptoms: ['Dolor lumbar (Puño percusión positiva)', 'Fiebre con escalofríos', 'Disuria', 'Náuseas'],
    nursingCare: ['Fomentar la hidratación oral/IV', 'Administración de antibióticos', 'Control de la curva térmica']
  },
  {
    id: 'litiasis_r',
    name: 'Litiasis Renal',
    system: 'Renal',
    definition: 'Formación de cálculos en el aparato urinario.',
    affectedTarget: 'Cálices, pelvis renal o uréteres',
    symptoms: ['Cólico nefrítico (dolor lumbar súbito e insoportable)', 'Hematuria', 'Náuseas'],
    nursingCare: ['Manejo del dolor agudo (Escala EVA)', 'Hidratación forzada si el cálculo es pequeño', 'Colado de orina para recuperar cálculo']
  },
  {
    id: 'irc',
    name: 'Insuficiencia Renal Crónica (IRC)',
    system: 'Renal',
    definition: 'Disminución persistente de la función renal filtrante por más de 3 meses.',
    affectedTarget: 'Riñón global (Nefronas)',
    symptoms: ['Hipertensión', 'Anemia', 'Prurito urémico', 'Fatiga'],
    nursingCare: ['Educación sobre dieta hipoproteica/hiposódica', 'Cuidado de acceso vascular para diálisis', 'Control de potasio y fósforo']
  },
  {
    id: 'hipotiroidismo',
    name: 'Hipotiroidismo',
    system: 'Endocrino',
    definition: 'Deficiencia de hormonas tiroideas.',
    affectedTarget: 'Metabolismo sistémico',
    symptoms: ['Intolerancia al frío', 'Estreñimiento', 'Bradipsiquia', 'Mixedema'],
    nursingCare: ['Administración de Levotiroxina en ayunas', 'Prevención del estreñimiento', 'Vigilar signos de coma mixedematoso']
  },
  {
    id: 'hipertiroidismo',
    name: 'Hipertiroidismo',
    system: 'Endocrino',
    definition: 'Exceso de producción de hormonas tiroideas.',
    affectedTarget: 'Metabolismo sistémico',
    symptoms: ['Exoftalmos (en Graves)', 'Taquicardia', 'Pérdida de peso', 'Insomnio'],
    nursingCare: ['Control de la frecuencia cardíaca', 'Proteger córneas si hay exoftalmos', 'Ambiente tranquilo y fresco']
  },
  {
    id: 'addison',
    name: 'Enfermedad de Addison',
    system: 'Endocrino',
    definition: 'Insuficiencia suprarrenal primaria.',
    affectedTarget: 'Corteza Suprarrenal',
    symptoms: ['Hiperpigmentación cutánea', 'Hipotensión ortostática', 'Deseo de sal', 'Fatiga'],
    nursingCare: ['Administración de corticoides', 'Vigilancia de signos de crisis addisoniana', 'Manejo del estrés']
  },
  {
    id: 'cushing',
    name: 'Síndrome de Cushing',
    system: 'Endocrino',
    definition: 'Exposición prolongada a niveles elevados de glucocorticoides.',
    affectedTarget: 'Metabolismo de grasas y proteínas',
    symptoms: ['Cara de luna llena', 'Giba dorsal', 'Estrías purpúreas en abdomen', 'Obesidad central'],
    nursingCare: ['Prevención de infecciones (inmunosupresión)', 'Monitoreo de glucemia y PA', 'Cuidado de la integridad cutánea']
  },
  {
    id: 'diabes_ins',
    name: 'Diabetes Insípida',
    system: 'Endocrino',
    definition: 'Déficit de ADH o resistencia a su acción.',
    affectedTarget: 'Túbulos colectores renales',
    symptoms: ['Poliuria masiva (orina diluida)', 'Polidipsia intensa', 'Signos de deshidratación'],
    nursingCare: ['Balance hídrico estricto', 'Administración de Desmopresina', 'Vigilancia de hipernatremia']
  },
  {
    id: 'sepsis',
    name: 'Sepsis / Choque Séptico',
    system: 'Infeccioso',
    definition: 'Disfunción orgánica potencialmente mortal causada por una respuesta desregulada a la infección.',
    affectedTarget: 'Sistémico (Múltiples órganos)',
    symptoms: ['Hipotensión que no responde a volumen', 'Fiebre o hipotermia', 'Taquicardia', 'Lactato > 2 mmol/L'],
    nursingCare: ['Administración rápida de cristaloides y antibióticos', 'Toma de hemocultivos', 'Monitoreo dinámico del gasto cardíaco']
  },
  {
    id: 'vih',
    name: 'VIH / SIDA',
    system: 'Infeccioso',
    definition: 'Infección por el virus de la inmunodeficiencia humana.',
    affectedTarget: 'Linfocitos T CD4+',
    symptoms: ['Infecciones oportunistas', 'Pérdida de peso', 'Linfadenopatías', 'Diarrea crónica'],
    nursingCare: ['Educación sobre tratamiento antirretroviral (TAR)', 'Precauciones estándar', 'Apoyo integral biopsicosocial']
  },
  {
    id: 'malaria',
    name: 'Malaria',
    system: 'Infeccioso',
    definition: 'Infección parasitaria por Plasmodium trasmitida por mosquitos.',
    affectedTarget: 'Eritrocitos e Hígado',
    symptoms: ['Paroxismos febriles (escalofríos, fiebre, sudor)', 'Anemia', 'Esplenomegalia'],
    nursingCare: ['Control de la curva térmica', 'Vigilancia de signos de malaria cerebral', 'Administración de antimaláricos']
  },
  {
    id: 'dengue',
    name: 'Dengue Grave',
    system: 'Infeccioso',
    definition: 'Infección viral transmitida por Aedes aegypti con fuga plasmática.',
    affectedTarget: 'Endotelio vascular y Plaquetas',
    symptoms: ['Dolor retroocular', 'Petequias', 'Hemorragias', 'Dolor abdominal intenso'],
    nursingCare: ['Reposo y toldillo', 'Evitar AINEs (preferir Paracetamol)', 'Balance hídrico riguroso']
  },
  {
    id: 'leptospira',
    name: 'Leptospirosis',
    system: 'Infeccioso',
    definition: 'Zoonosis causada por espiroquetas tras contacto con orina animal.',
    affectedTarget: 'Hígado y Riñón principalmente (Weil)',
    symptoms: ['Sufusión conjuntival', 'Ictericia', 'Mialgias intensas (pantorrillas)', 'Fiebre'],
    nursingCare: ['Control de función renal', 'Manejo de la hidratación', 'Administración de penicilina o doxiciclina']
  },
  {
    id: 'varicela',
    name: 'Varicela',
    system: 'Infeccioso',
    definition: 'Infección primaria por virus de varicela-zóster.',
    affectedTarget: 'Piel y Mucosas',
    symptoms: ['Exantema maculopapular-vesicular-costra (cielo estrellado)', 'Prurito intenso', 'Fiebre'],
    nursingCare: ['Aislamiento respiratorio y de contacto', 'Cuidado de la piel para evitar sobreinfección', 'Corte de uñas']
  },
  {
    id: 'herpes_z',
    name: 'Herpes Zóster',
    system: 'Infeccioso',
    definition: 'Reactivación del virus varicela-zóster en ganglios dorsales.',
    affectedTarget: 'Dermatoma específico',
    symptoms: ['Dolor neuropático intenso', 'Vesículas en racimo siguiendo un trayecto nervioso'],
    nursingCare: ['Manejo del dolor neuropático', 'Administración de antivirales (Aciclovir)', 'Cuidado de las lesiones']
  },
  {
    id: 'anemia_f',
    name: 'Anemia Ferropénica',
    system: 'Hematológico',
    definition: 'Disminución de hemoglobina por deficiencia de hierro.',
    affectedTarget: 'Eritrocitos',
    symptoms: ['Palidez', 'Astenia', 'Pica', 'Coiloniquia (uñas en cuchara)'],
    nursingCare: ['Administración de hierro oral (con Vit C)', 'Educación nutricional', 'Control de efectos GI del hierro']
  },
  {
    id: 'leucemia',
    name: 'Leucemia Linfoide Aguda',
    system: 'Hematológico',
    definition: 'Neoplasia de precursores linfoides en médula ósea.',
    affectedTarget: 'Médula Ósea y Sangre periférica',
    symptoms: ['Fiebre', 'Hemorragias (trombocitopenia)', 'Dolor óseo', 'Adenopatías'],
    nursingCare: ['Manejo del paciente neutropénico (aislamiento)', 'Prevención de mucositis', 'Control de hemorragias']
  },
  {
    id: 'PTI',
    name: 'Púrpura Trombocitopénica Idiopática',
    system: 'Hematológico',
    definition: 'Destrucción autoinmune de plaquetas.',
    affectedTarget: 'Plaquetas',
    symptoms: ['Equimosis y Petequias', 'Epistaxis', 'Gingivorragia'],
    nursingCare: ['Evitar punciones intramusculares', 'Reposo relativo para evitar traumatismos', 'Vigilar signos de sangrado en SNC']
  },
  {
    id: 'les',
    name: 'Lupus Eritematoso Sistémico (LES)',
    system: 'Inmunológico',
    definition: 'Enfermedad autoinmune multisistémica crónica.',
    affectedTarget: 'Articulaciones, Piel, Riñón, Corazón',
    symptoms: ['Eritema malar (alas de mariposa)', 'Artralgia', 'Fotosensibilidad', 'Lupus discoide'],
    nursingCare: ['Proteger de la luz solar', 'Monitoreo de función renal (proteinuria)', 'Fomentar el cumplimiento del tratamiento con corticoides']
  },
  {
    id: 'ar',
    name: 'Artritis Reumatoide',
    system: 'Inmunológico',
    definition: 'Enfermedad inflamatoria crónica autoinmune de las sinoviales.',
    affectedTarget: 'Articulaciones diartrodiales (Sinovial)',
    symptoms: ['Rigidez matutina prolongada', 'Dolor articular simétrico', 'Deformidades articulares'],
    nursingCare: ['Ejercicios de amplitud de movimiento', 'Control del dolor', 'Calor local para mejorar rigidez']
  },
  {
    id: 'stevens',
    name: 'Síndrome de Stevens-Johnson',
    system: 'Dermatológico',
    definition: 'Reacción de hipersensibilidad severa que afecta piel y mucosas.',
    affectedTarget: 'Epidermis',
    symptoms: ['Desprendimiento epidérmico (<10%)', 'Ampollas hemorrágicas', 'Afectación mucosa ocular/oral'],
    nursingCare: ['Manejo como paciente quemado', 'Control estricto de infecciones', 'Higiene bucal suave y colirios']
  },
  {
    id: 'gota',
    name: 'Gota (Artritis Gotosa)',
    system: 'Metabólico',
    definition: 'Depósito de cristales de urato monosódico en articulaciones.',
    affectedTarget: 'Articulaciones (primera metatarsofalángica)',
    symptoms: ['Dolor articular súbito e insoportable (Podagra)', 'Tofos (depósitos crónicos)', 'Eritema local'],
    nursingCare: ['Reposo y elevación de la extremidad', 'Restricción de purinas en dieta', 'Hidratación abundante']
  },
  {
    id: 'osteoporosis',
    name: 'Osteoporosis',
    system: 'Musculoesquelético',
    definition: 'Densidad mineral ósea disminuida con alteración de la microarquitectura.',
    affectedTarget: 'Tejido óseo',
    symptoms: ['Fracturas por fragilidad', 'Pérdida de estatura', 'Xifosis dorsal'],
    nursingCare: ['Prevención de caídas en el hogar', 'Suplementación de Calcio y Vitamina D', 'Ejercicios de bajo impacto']
  },
  {
    id: 'rabdo',
    name: 'Rabdomiólisis',
    system: 'Musculoesquelético',
    definition: 'Descomposición del tejido muscular con liberación de mioglobina.',
    affectedTarget: 'Músculos esqueléticos y Riñones (por toxicidad)',
    symptoms: ['Mialgias', 'Debilidad muscular', 'Orinas color oscura (mioglobinuria)'],
    nursingCare: ['Hidratación agresiva IV', 'Control de CPA y niveles de electrolitos', 'Vigilancia de insuficiencia renal']
  },
  {
    id: 'fibro',
    name: 'Fibromialgia',
    system: 'Musculoesquelético',
    definition: 'Síndrome de dolor musculoesquelético generalizado crónico.',
    affectedTarget: 'Procesamiento central del dolor',
    symptoms: ['Dolor en puntos gatillo', 'Fatiga crónica', 'Trastornos del sueño', 'Colon irritable'],
    nursingCare: ['Manejo del dolor con terapia multimodal', 'Apoyo psicológico (TCC)', 'Fomentar actividad física gradual']
  },
  {
    id: 'oa',
    name: 'Osteoartritis',
    system: 'Musculoesquelético',
    definition: 'Degeneración del cartílago articular.',
    affectedTarget: 'Cartílago hialino articular',
    symptoms: ['Dolor mecánico (empeora con movimiento)', 'Crepitación articular', 'Nódulos de Heberden'],
    nursingCare: ['Manejo del peso corporal', 'Analgesia tópica/sistémica', 'Ayudas mecánicas para la marcha']
  },
  {
    id: 'asco',
    name: 'Ascitis',
    system: 'Digestivo',
    definition: 'Acumulación de líquido seroso en la cavidad peritoneal.',
    affectedTarget: 'Cavidad Peritoneal',
    symptoms: ['Aumento del perímetro abdominal', 'Oleada ascítica positiva', 'Eversión del ombligo'],
    nursingCare: ['Balance hídrico', 'Medición diaria del perímetro abdominal', 'Control de electrolitos (Sodio)']
  },
  {
    id: 'celulitis',
    name: 'Celulitis Infecciosa',
    system: 'Infectioso',
    definition: 'Infección bacteriana aguda de la dermis profunda y tejido subcutáneo.',
    affectedTarget: 'Dermis profunda',
    symptoms: ['Eritema mal definido', 'Calor local', 'Edema', 'Linfangitis'],
    nursingCare: ['Elevación de la zona afectada', 'Administración de antibióticos', 'Marcar el borde del eritema para monitoreo']
  },
  {
    id: 'absceso_cut',
    name: 'Absceso Cutáneo',
    system: 'Dermatológico',
    definition: 'Acumulación localizada de pus en la piel.',
    affectedTarget: 'Tejido subcutáneo/Dermis',
    symptoms: ['Nódulo doloroso fluctuante', 'Eritema', 'Calor'],
    nursingCare: ['Asistencia en el drenaje quirúrgico', 'Cambios de apósitos', 'Control del dolor local']
  },
  {
    id: 'faringitis',
    name: 'Faringoamigdalitis Aguda',
    system: 'Respiratorio',
    definition: 'Inflamación de las amígdalas y faringe, usualmente viral o bacteriana.',
    affectedTarget: 'Faringe y Amígdalas',
    symptoms: ['Odinofagia', 'Adenopatías cervicales', 'Exudado pultáceo (si es bacteriana)'],
    nursingCare: ['Gargarismos salinos', 'Control de la fiebre', 'Asegurar ingesta de líquidos']
  },
  {
    id: 'sinusitis',
    name: 'Sinusitis Aguda',
    system: 'Respiratorio',
    definition: 'Inflamación de la mucosa de los senos paranasales.',
    affectedTarget: 'Senos Paranasales (Maxilar, Frontal)',
    symptoms: ['Dolor facial que empeora al inclinarse', 'Rinorrea purulenta', 'Anosmia'],
    nursingCare: ['Lavados nasales', 'Hidratación', 'Control del dolor']
  },
  {
    id: 'otitis',
    name: 'Otitis Media Aguda',
    system: 'Infectioso',
    definition: 'Infección del oído medio.',
    affectedTarget: 'Oído Medio',
    symptoms: ['Otalgia intensa', 'Hipoacusia', 'Iritabilidad (en niños)', 'Fiebre'],
    nursingCare: ['Prevención de entrada de agua en el oído', 'Manejo de la temperatura', 'Uso de analgésicos']
  },
  {
    id: 'cistitis',
    name: 'Cistitis Aguda',
    system: 'Renal',
    definition: 'Infección urinaria baja localizada en la vejiga.',
    affectedTarget: 'Vejiga Urinaria',
    symptoms: ['Disuria', 'Polaquiuria', 'Tenesmo vesical', 'Dolor suprapúbico'],
    nursingCare: ['Fomentar ingesta hídrica abundante', 'Educación sobre técnica de higiene perineal', 'Administración de antisépticos urinarios']
  },
  {
    id: 'prostatitis',
    name: 'Prostatitis Aguda',
    system: 'Genitourinario',
    definition: 'Inflamación infecciosa de la próstata.',
    affectedTarget: 'Próstata',
    symptoms: ['Dolor perineal', 'Disuria', 'Fiebre', 'Obstrucción urinaria parcial'],
    nursingCare: ['Control de la diuresis', 'Manejo de la fiebre', 'Prevención del estreñimiento']
  },
  {
    id: 'orquitis',
    name: 'Orquiepididimitis',
    system: 'Genitourinario',
    definition: 'Inflamación del epidídimo y testículo.',
    affectedTarget: 'Testículo y Epidídimo',
    symptoms: ['Edema testicular unilateral', 'Dolor intenso', 'Fiebre', 'Reflejo cremastérico (usualmente presente)'],
    nursingCare: ['Soporte escrotal', 'Reposo', 'Aplicación de frío local']
  },
  {
    id: 'osteomielitis',
    name: 'Osteomielitis',
    system: 'Infeccioso',
    definition: 'Infección del hueso y médula ósea.',
    affectedTarget: 'Tejido óseo',
    symptoms: ['Dolor óseo profundo', 'Eritema sobre el hueso', 'Fiebre héctica'],
    nursingCare: ['Tratamiento antibiótico IV prolongado', 'Inmovilización de la extremidad', 'Manejo de la herida quirúrgica']
  },
  {
    id: 'mononucleosis',
    name: 'Mononucleosis Infecciosa',
    system: 'Infeccioso',
    definition: 'Infección por el virus de Epstein-Barr.',
    affectedTarget: 'Linfocitos B y tejido linfoide',
    symptoms: ['Fiebre', 'Faringitis severa', 'Adenopatías generalizadas', 'Esplenomegalia'],
    nursingCare: ['Reposo absoluto (evitar ruptura esplénica)', 'Hidratación', 'Control del dolor']
  },
  {
    id: 'fiebre_t',
    name: 'Fiebre Tifoidea',
    system: 'Infeccioso',
    definition: 'Infección sistémica por Salmonella Typhi.',
    affectedTarget: 'Placas de Peyer intestinales y SRE',
    symptoms: ['Fiebre en escalera', 'Roséola tifoidea', 'Bradicardia relativa (Signo de Faget)'],
    nursingCare: ['Aislamiento entérico', 'Vigilar signos de perforación intestinal', 'Dieta blanda']
  },
  {
    id: 'meniere',
    name: 'Enfermedad de Meniere',
    system: 'Otorrinolaringológico',
    definition: 'Trastorno del oído interno caracterizado por hidrops endolinfático.',
    affectedTarget: 'Oído Interno (Laberinto)',
    symptoms: ['Vértigo episódico', 'Tinnitus', 'Hipoacusia fluctuante', 'Plenitud ótica'],
    nursingCare: ['Prevención de caídas durante episodios', 'Dieta hiposódica', 'Evitar cambios bruscos de posición']
  },
  {
    id: ' glaucoma',
    name: 'Glaucoma de Ángulo Abierto',
    system: 'Oftalmológico',
    definition: 'Aumento crónico de la presión intraocular con daño del nervio óptico.',
    affectedTarget: 'Nervio Óptico',
    symptoms: ['Pérdida de visión periférica ("túnel")', 'Asintomático inicialmente'],
    nursingCare: ['Administración de colirios hipotensores', 'Educación sobre técnica de instilación de gotas', 'Controles oftalmológicos']
  },
  {
    id: 'catarata',
    name: 'Catarata',
    system: 'Oftalmológico',
    definition: 'Opacidad del cristalino.',
    affectedTarget: 'Cristalino',
    symptoms: ['Visión borrosa progresiva', 'Dificultad para ver de noche', 'Deslumbramientos'],
    nursingCare: ['Apoyo pre y postoperatorio', 'Administración de gotas antibióticas post cirugía', 'Uso de protector ocular']
  },
  {
    id: 'hemorroides',
    name: 'Hemorroides',
    system: 'Digestivo',
    definition: 'Dilataciones varicosas de las venas del plexo hemorroidal.',
    affectedTarget: 'Canal Anal',
    symptoms: ['Rectorragia brillante al defecar', 'Prolapso', 'Prurito anal'],
    nursingCare: ['Baños de asiento', 'Dieta rica en fibra y abundantes líquidos', 'Uso de pomadas antiinflamatorias']
  },
  {
    id: 'hernia_i',
    name: 'Hernia Inguinal',
    system: 'Digestivo/Muscular',
    definition: 'Protrusión de contenido abdominal a través del conducto inguinal.',
    affectedTarget: 'Canal Inguinal',
    symptoms: ['Masa en región inguinal que aumenta con esfuerzo', 'Dolor leve a severo (si hay encarcelación)'],
    nursingCare: ['Valoración de la reductibilidad de la masa', 'Vigilar signos de estrangulación (dolor, vómito)', 'Preparación quirúrgica']
  },
  {
    id: 'epilepsia_a',
    name: 'Epilepsia Ausencia',
    system: 'Neurológico',
    definition: 'Crisis generalizadas caracterizadas por breves interrupciones de la conciencia.',
    affectedTarget: 'Cerebro global',
    symptoms: ['Mirada fija', 'Pestañeo rápido', 'Interrupción de la actividad sin caída'],
    nursingCare: ['Control de la seguridad del paciente', 'Registro de frecuencia y duración', 'Apoyo escolar/social']
  },
  {
    id: 'herpes_s',
    name: 'Herpes Simple Labial',
    system: 'Infectioso',
    definition: 'Infección por virus herpes simple tipo 1 (VHS-1).',
    affectedTarget: 'Borde de los labios/Mucosa oral',
    symptoms: ['Hormigueo previo', 'Vesículas pequeñas dolorosas', 'Costra'],
    nursingCare: ['No compartir utensilios', 'Aplicación de antivirales tópicos', 'Evitar contacto con las lesiones']
  },
  {
    id: 'tiña_p',
    name: 'Tiña Pedis (Pie de Atleta)',
    system: 'Infectioso/Dermatológico',
    definition: 'Infección fúngica de la piel de los pies.',
    affectedTarget: 'Espacios interdigitales, planta del pie',
    symptoms: ['Eritema', 'Prurito', 'Descamación', 'Mal olor'],
    nursingCare: ['Mantener pies secos', 'Uso de antifúngicos tópicos', 'Uso de calzado ventilado y calcetines de algodón']
  },
  {
    id: 'anemia_p',
    name: 'Anemia Perniciosa',
    system: 'Hematológico',
    definition: 'Deficiencia de vitamina B12 por falta de factor intrínseco.',
    affectedTarget: 'Eritrocitos y Sistema Nervioso',
    symptoms: ['Glositis (lengua roja depapilada)', 'Parestesias', 'Marcha inestable'],
    nursingCare: ['Administración de Cianocobalamina IM de por vida', 'Vigilancia de seguridad por parestesias', 'Dieta adecuada']
  },
  {
    id: 'purpura_h',
    name: 'Púrpura de Henoch-Schönlein',
    system: 'Inmunológico/Vascular',
    definition: 'Vasculitis sistémica de pequeños vasos mediada por IgA.',
    affectedTarget: 'Piel, Articulaciones, GI, Riñón',
    symptoms: ['Púrpura palpable en glúteos/piernas', 'Dolor abdominal', 'Hematuria'],
    nursingCare: ['Monitorización de función renal', 'Manejo del dolor abdominal', 'Reposo en cama']
  },
  {
    id: 'fiebre_r',
    name: 'Fiebre Reumática',
    system: 'Inmunológico/Cardíaco',
    definition: 'Respuesta inmunitaria tardía a faringitis estreptocócica.',
    affectedTarget: 'Corazón (Válvulas), Articulaciones',
    symptoms: ['Carditis', 'Poliartritis migratoria', 'Corea de Sydenham', 'Nódulos subcutáneos'],
    nursingCare: ['Administración de Penicilina benzatínica', 'Reposo en cama si hay carditis', 'Control del dolor articular']
  },
  {
    id: 'sind_down',
    name: 'Síndrome de Down',
    system: 'Genético',
    definition: 'Trastorno genético por trisomía del par 21.',
    affectedTarget: 'Desarrollo multisistémico',
    symptoms: ['Hipotonía muscular', 'Rasgos faciales característicos', 'Cardiopatías frecuentes'],
    nursingCare: ['Estimulación temprana', 'Control cardiológico y tiroideo frecuente', 'Fomento de la autonomía']
  },
  {
    id: 'hipoti_con',
    name: 'Hipotiroidismo Congénito',
    system: 'Endocrino (Pediátrico)',
    definition: 'Déficit de hormona tiroidea desde el nacimiento.',
    affectedTarget: 'Desarrollo metabólico y cerebral',
    symptoms: ['Ictericia prolongada', 'Macroglosia', 'Hernia umbilical', 'Estreñimiento'],
    nursingCare: ['Tamizaje neonatal', 'Inicio inmediato de Levotiroxina', 'Control del crecimiento']
  },
  {
    id: 'bronc_ped',
    name: 'Bronquiolitis',
    system: 'Respiratorio (Pediátrico)',
    definition: 'Primer episodio de sibilancias precedido de rinitis en lactantes.',
    affectedTarget: 'Vías respiratorias pequeñas (Bronquiolos)',
    symptoms: ['Dificultad respiratoria (tirajes)', 'Sibilancias', 'Rechazo a la alimentación'],
    nursingCare: ['Aspiración de secreciones nasales', 'Posición de semifowler', 'Monitoreo de SatO2 y FR']
  },
  {
    id: 'cancer_p',
    name: 'Cáncer de Pulmón (CPCNP)',
    system: 'Oncológico',
    definition: 'Neoplasia maligna de células epiliales del pulmón.',
    affectedTarget: 'Parénquima pulmonar/Bronquios',
    symptoms: ['Tos con hemoptisis', 'Dolor torácico', 'Pérdida de peso', 'Pancoast (síndrome)'],
    nursingCare: ['Manejo de la disnea', 'Control del dolor crónico', 'Cuidados del paciente en quimioterapia/radioterapia']
  },
  {
    id: 'hepatitis_a',
    name: 'Hepatitis A',
    system: 'Infectioso',
    definition: 'Inflamación hepática viral autolimitada trasmitida vía fecal-oral.',
    affectedTarget: 'Hepatocitos',
    symptoms: ['Ictericia', 'Coluria', 'Acolia', 'Fiebre y náuseas'],
    nursingCare: ['Aislamiento entérico', 'Reposo y dieta baja en grasas', 'Higiene estricta']
  },
  {
    id: 'fascitis',
    name: 'Fascitis Necrosante',
    system: 'Infectioso (Emergencia)',
    definition: 'Infección bacteriana rápida y destructiva de la fascia.',
    affectedTarget: 'Fascia muscular y tejido subcutáneo',
    symptoms: ['Dolor desproporcionado a la lesión visible', 'Criptación', 'Necrosis dérmica violácea'],
    nursingCare: ['Preparación para desbridamiento quirúrgico inmediato', 'Manejo de antibióticos de amplio espectro', 'Soporte hemodinámico']
  },
  {
    id: 'rabia',
    name: 'Rabia Humana',
    system: 'Infectioso/Neurológico',
    definition: 'Encefalitis viral aguda transmitida por mordedura animal.',
    affectedTarget: 'SNC (Cerebro)',
    symptoms: ['Hidrofobia', 'Aerofobia', 'Espasmos musculares', 'Iritabilidad extrema'],
    nursingCare: ['Lavado profuso de la herida con agua y jabón', 'Administración de vacuna/inmunoglobulina post-exposición', 'Aislamiento en habitación tranquila']
  },
  {
    id: 'lepra',
    name: 'Enfermedad de Hansen (Lepra)',
    system: 'Infectioso',
    definition: 'Infección crónica por Mycobacterium leprae.',
    affectedTarget: 'Piel y Nervios Periféricos',
    symptoms: ['Manchas hipocrómicas anestésicas', 'Engrosamiento nervioso', 'Deformidades'],
    nursingCare: ['Administración de poliquimioterapia (PQT)', 'Cuidado de pies/manos anestésicos', 'Lucha contra el estigma']
  },
  {
    id: 'mal_altura',
    name: 'Mal de Montaña (Soroche)',
    system: 'Ambiental',
    definition: 'Hipoxia hipobárica por ascenso rápido a altitudes elevadas.',
    affectedTarget: 'Oxigenación sistémica',
    symptoms: ['Cefalea', 'Mareos', 'Náuseas', 'Dificultad física'],
    nursingCare: ['Descenso si los síntomas son graves', 'Oxigenoterapia', 'Hidratación y reposo']
  },
  {
    id: 'golpe_calor',
    name: 'Golpe de Calor',
    system: 'Ambiental',
    definition: 'Falla de la termorregulación por exposición a calor extremo.',
    affectedTarget: 'Sistema nervioso central/Termorregulación',
    symptoms: ['Temperatura > 40°C', 'Piel seca y caliente', 'Confusión/Coma'],
    nursingCare: ['Enfriamiento rápido (hielo, mantas frías)', 'Hidratación IV con sueros frescos', 'Monitoreo de la temperatura central']
  }
];

export const LAB_VALUES: LabValue[] = [
  // Hematología
  { name: 'Hemoglobina (Hgb) - Hombres', normalRange: '13.5 - 17.5', unit: 'g/dL' },
  { name: 'Hemoglobina (Hgb) - Mujeres', normalRange: '12.0 - 15.5', unit: 'g/dL' },
  { name: 'Hematocrito (Hct) - Hombres', normalRange: '41 - 50', unit: '%' },
  { name: 'Hematocrito (Hct) - Mujeres', normalRange: '36 - 44', unit: '%' },
  { name: 'Leucocitos (WBC)', normalRange: '4,500 - 11,000', unit: '/μL' },
  { name: 'Plaquetas', normalRange: '150,000 - 450,000', unit: '/μL' },
  
  // Electrolitos
  { name: 'Sodio (Na+)', normalRange: '135 - 145', unit: 'mEq/L' },
  { name: 'Potasio (K+)', normalRange: '3.5 - 5.0', unit: 'mEq/L' },
  { name: 'Cloro (Cl-)', normalRange: '96 - 106', unit: 'mEq/L' },
  { name: 'Calcio total (Ca++)', normalRange: '8.5 - 10.5', unit: 'mg/dL' },
  { name: 'Magnesio (Mg++)', normalRange: '1.7 - 2.2', unit: 'mg/dL' },
  
  // Función Renal y Metabólica
  { name: 'Creatinina', normalRange: '0.7 - 1.3', unit: 'mg/dL' },
  { name: 'BUN (Nitrógeno Ureico)', normalRange: '7 - 20', unit: 'mg/dL' },
  { name: 'Glucemia en ayunas', normalRange: '70 - 100', unit: 'mg/dL' },
  { name: 'HbA1c (Hemoglobina Glicosilada)', normalRange: '< 5.7', unit: '%' },
  
  // Coagulación
  { name: 'TP (Tiempo de Protrombina)', normalRange: '11 - 13.5', unit: 'seg' },
  { name: 'TTP (Tiempo de Tromboplastina)', normalRange: '25 - 35', unit: 'seg' },
  { name: 'INR', normalRange: '0.8 - 1.1', unit: 'ratio' },
  
  // Gases Arteriales y Marcadores
  { name: 'pH Arterial', normalRange: '7.35 - 7.45', unit: '-' },
  { name: 'pCO2', normalRange: '35 - 45', unit: 'mmHg' },
  { name: 'pO2', normalRange: '80 - 100', unit: 'mmHg' },
  { name: 'Bicarbonato (HCO3)', normalRange: '22 - 26', unit: 'mEq/L' },
  { name: 'Lactato', normalRange: '0.5 - 2.2', unit: 'mmol/L' },
  { name: 'PCR (Proteína C Reactiva)', normalRange: '< 1.0', unit: 'mg/dL' },
  { name: 'Troponina I', normalRange: '< 0.04', unit: 'ng/mL' }
];

export const DICTIONARY: DictionaryEntry[] = [
  // Abreviaturas Clínicas
  { term: 'Accidente Cerebrovascular', abbreviation: 'ACV', definition: 'Pérdida súbita de flujo sanguíneo al cerebro o sangrado dentro de la cabeza.', category: 'Abreviaturas' },
  { term: 'Frecuencia Cardíaca', abbreviation: 'FC', definition: 'Número de veces que el corazón late por unidad de tiempo, usualmente por minuto.', category: 'Abreviaturas' },
  { term: 'Frecuencia Respiratoria', abbreviation: 'FR', definition: 'Número de respiraciones que una persona toma por minuto.', category: 'Abreviaturas' },
  { term: 'Catéter Venoso Central', abbreviation: 'CVC', definition: 'Catéter cuya punta se sitúa en la vena cava superior o vena cava inferior.', category: 'Abreviaturas' },
  { term: 'Hipertensión Arterial', abbreviation: 'HTA', definition: 'Afección en la que la presión de la sangre hacia las paredes de la arteria es demasiado alta.', category: 'Abreviaturas' },
  { term: 'Diabetes Mellitus', abbreviation: 'DM', definition: 'Conjunto de trastornos metabólicos cuya característica común es la hiperglucemia.', category: 'Abreviaturas' },
  { term: 'Insuficiencia Renal Crónica', abbreviation: 'IRC', definition: 'Pérdida progresiva, permanente e irreversible de la función glomerular o tubular.', category: 'Abreviaturas' },
  { term: 'Infarto Agudo de Miocardio', abbreviation: 'IAM', definition: 'Necrosis del músculo cardíaco por falta de flujo sanguíneo coronario.', category: 'Abreviaturas' },
  { term: 'Enfermedad Pulmonar Obstructiva Crónica', abbreviation: 'EPOC', definition: 'Enfermedad inflamatoria pulmonar crónica que causa la obstrucción del flujo de aire.', category: 'Abreviaturas' },
  { term: 'Reanimación Cardiopulmonar', abbreviation: 'RCP', definition: 'Técnica de emergencia para salvar vidas que se utiliza cuando el corazón deja de latir.', category: 'Abreviaturas' },
  { term: 'Unidad de Cuidados Intensivos', abbreviation: 'UCI', definition: 'Instalación especial dentro de un hospital que proporciona medicina intensiva.', category: 'Abreviaturas' },
  { term: 'Presión Venosa Central', abbreviation: 'PVC', definition: 'Presión de la sangre en la vena cava superior cerca de la aurícula derecha.', category: 'Abreviaturas' },
  { term: 'Presión Arterial Media', abbreviation: 'PAM', definition: 'Promedio de la presión arterial durante un solo ciclo cardíaco.', category: 'Abreviaturas' },
  { term: 'Electrocardiograma', abbreviation: 'ECG', definition: 'Registro de la actividad eléctrica del corazón en función del tiempo.', category: 'Abreviaturas' },
  { term: 'Análisis de Gases Arteriales', abbreviation: 'AGA', definition: 'Medición de las presiones de gases en la sangre arterial.', category: 'Abreviaturas' },
  { term: 'Saturación de Oxígeno', abbreviation: 'SatO2', definition: 'Porcentaje de hemoglobina saturada con oxígeno en la sangre.', category: 'Abreviaturas' },
  { term: 'Nada por vía oral', abbreviation: 'NPO', definition: 'Instrucción médica que prohíbe la ingesta de alimentos o líquidos.', category: 'Abreviaturas' },
  { term: 'Vía Intravenosa', abbreviation: 'IV', definition: 'Administración de sustancias directamente en el torrente sanguíneo a través de una vena.', category: 'Abreviaturas' },
  { term: 'Vía Intramuscular', abbreviation: 'IM', definition: 'Administración de fármacos directamente en el tejido muscular.', category: 'Abreviaturas' },
  { term: 'Asistencia Respiratoria Mecánica', abbreviation: 'ARM', definition: 'Soporte vital que ayuda o reemplaza la respiración espontánea.', category: 'Abreviaturas' },
  { term: 'Frecuencia Cardíaca Fetal', abbreviation: 'FCF', definition: 'Número de latidos cardíacos fetales observados por minuto.', category: 'Abreviaturas' },
  { term: 'Electroencefalograma', abbreviation: 'EEG', definition: 'Prueba que detecta la actividad eléctrica del cerebro.', category: 'Abreviaturas' },
  { term: 'Tomografía Computarizada', abbreviation: 'TC', definition: 'Procedimiento de imagen que usa rayos X para crear imágenes detalladas del cuerpo.', category: 'Abreviaturas' },
  { term: 'Resonancia Magnética', abbreviation: 'RM', definition: 'Técnica de imagen que utiliza campos magnéticos y ondas de radio.', category: 'Abreviaturas' },
  { term: 'Signos Vitales', abbreviation: 'SV', definition: 'Mediciones de las funciones más básicas del cuerpo; incluye FC, FR, PA y T°.', category: 'Abreviaturas' },
  { term: 'Fracción Inspirada de Oxígeno', abbreviation: 'FiO2', definition: 'Concentración o proporción de oxígeno en la mezcla inspirada.', category: 'Abreviaturas' },
  { term: 'Presión Arterial Sistólica', abbreviation: 'PAS', definition: 'Presión máxima en las arterias durante la contracción del corazón.', category: 'Abreviaturas' },
  { term: 'Presión Arterial Diastólica', abbreviation: 'PAD', definition: 'Presión mínima en las arterias cuando el corazón se relaja entre latidos.', category: 'Abreviaturas' },

  // Términos Generales y Clínicos
  { term: 'Disnea', definition: 'Dificultad respiratoria o falta de aire subjetiva.', category: 'General' },
  { term: 'Diaforesis', definition: 'Sudoración excesiva, especialmente cuando es síntoma de una enfermedad.', category: 'General' },
  { term: 'Bradicardia', definition: 'Frecuencia cardíaca inferior a 60 latidos por minuto.', category: 'General' },
  { term: 'Taquicardia', definition: 'Frecuencia cardíaca superior a 100 latidos por minuto.', category: 'General' },
  { term: 'Afasia', definition: 'Trastorno del lenguaje que afecta la capacidad de comunicación de una persona.', category: 'General' },
  { term: 'Apnea', definition: 'Suspensión transitoria de la respiración espontánea.', category: 'General' },
  { term: 'Ascitis', definition: 'Acumulación de líquido en la cavidad peritoneal (abdominal).', category: 'General' },
  { term: 'Atelectasia', definition: 'Colapso total o parcial de un pulmón o lóbulo pulmonar.', category: 'General' },
  { term: 'Bacteriemia', definition: 'Presencia de bacterias viables en el torrente sanguíneo.', category: 'General' },
  { term: 'Bradipnea', definition: 'Frecuencia respiratoria anormalmente lenta.', category: 'General' },
  { term: 'Cianosis', definition: 'Coloración azulada de la piel y mucosas por falta de oxígeno.', category: 'General' },
  { term: 'Colelitiasis', definition: 'Presencia de cálculos o piedras dentro de la vesícula biliar.', category: 'General' },
  { term: 'Disfagia', definition: 'Dificultad o imposibilidad de tragar alimentos sólidos o líquidos.', category: 'General' },
  { term: 'Disuria', definition: 'Dolor o ardor al orinar, generalmente causado por infección.', category: 'General' },
  { term: 'Edema', definition: 'Hinchazón causada por la acumulación excesiva de líquidos en los tejidos.', category: 'General' },
  { term: 'Embolia', definition: 'Obstrucción brusca de un vaso sanguíneo por un cuerpo extraño (émbolo).', category: 'General' },
  { term: 'Epistaxis', definition: 'Término médico para el sangrado o hemorragia nasal.', category: 'General' },
  { term: 'Eritema', definition: 'Enrojecimiento de la piel debido a inflamación o congestión de capilares.', category: 'General' },
  { term: 'Escara', definition: 'Tejido muerto o necrótico que se desprende de la piel sana.', category: 'General' },
  { term: 'Exudado', definition: 'Líquido con alto contenido proteico que sale de los vasos por inflamación.', category: 'General' },
  { term: 'Flebitis', definition: 'Inflamación de la pared de una vena, a menudo con formación de un trombo.', category: 'General' },
  { term: 'Hematemesis', definition: 'Vómito de sangre fresca o digerida proveniente del tracto digestivo alto.', category: 'General' },
  { term: 'Hemoptisis', definition: 'Expectoración de sangre que proviene del árbol respiratorio.', category: 'General' },
  { term: 'Hepatomegalia', definition: 'Aumento patológico del tamaño del hígado.', category: 'General' },
  { term: 'Hipoxia', definition: 'Estado de deficiencia de oxígeno en la sangre, células y tejidos.', category: 'General' },
  { term: 'Isquemia', definition: 'Sufrimiento celular por falta de flujo sanguíneo y oxígeno.', category: 'General' },
  { term: 'Melenas', definition: 'Expulsión de heces negras y viscosas debido a sangre digerida.', category: 'General' },
  { term: 'Oliguria', definition: 'Disminución de la producción de orina por debajo de los niveles normales.', category: 'General' },
  { term: 'Paresia', definition: 'Ausencia parcial de movimiento o debilidad muscular.', category: 'General' },
  { term: 'Parestesia', definition: 'Sensación de hormigueo, pinchazos o adormecimiento de una parte del cuerpo.', category: 'General' },
  { term: 'Prurito', definition: 'Sensación de picor cutáneo que provoca la necesidad de rascarse.', category: 'General' },
  { term: 'Síncope', definition: 'Pérdida súbita y temporal de la conciencia y del tono muscular.', category: 'General' },

  // Anatomía y Otros
  { 
    term: 'Plano Sagital', 
    definition: 'Divide el cuerpo en mitades derecha e izquierda.', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139ed4bf?auto=format&fit=crop&w=800&q=80'
  },
  { 
    term: 'Plano Coronal', 
    definition: 'Divide el cuerpo en partes anterior (frontal) y posterior (dorsal).', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&w=800&q=80'
  },
  { 
    term: 'Caja Torácica', 
    definition: 'Estructura ósea formada por las costillas, esternón y columna vertebral que protege el corazón y pulmones.', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536b8a?auto=format&fit=crop&w=800&q=80'
  },
  { 
    term: 'Columna Vertebral', 
    definition: 'Estructura formada por 33 vértebras que protege la médula espinal.', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139ed4bf?auto=format&fit=crop&w=800&q=80'
  },
  { 
    term: 'Posición de Fowler', 
    definition: 'Paciente sentado en la cama con la cabecera elevada a 45°-60°.', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  { 
    term: 'Posición de Trendelenburg', 
    definition: 'Paciente en decúbito supino con la cabeza más baja que los pies (aprox. 15°-30°).', 
    category: 'Anatomía',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  { term: 'Proximal', definition: 'Cercano al punto de origen o tronco.', category: 'Anatomía' },
  { term: 'Distal', definition: 'Lejano al punto de origen o tronco.', category: 'Anatomía' },
  { term: 'Decúbito Supino', definition: 'Posición anatómica del cuerpo humano tendido boca arriba.', category: 'Anatomía' },
  { term: 'Decúbito Prono', definition: 'Posición anatómica del cuerpo humano tendido boca abajo.', category: 'Anatomía' }
];

export const CLINICAL_CASES: ClinicalCase[] = [
  // CASOS DE FARMACOLOGÍA
  {
    id: 'pharm-1',
    category: 'pharmacology',
    title: 'Sobredosis de Opioides (Fentanilo)',
    patient: 'Masculino de 35 años hallado inconsciente con jeringa cerca. Pupilas puntiformes.',
    vitals: {
      fc: '52 lpm',
      fr: '6 rpm',
      pa: '90/50 mmHg',
      temp: '35.5 °C',
      sat: '82% (cianosis distal)'
    },
    scenario: 'Paciente con depresión respiratoria severa tras administración accidental de dosis elevada de Fentanilo.',
    treatment: 'Antagonista opioide: Naloxona 0.4mg IV cada 2-3 min según respuesta.',
    options: [
      'Naloxona 0.4mg IV',
      'Flumazenil 0.2mg IV',
      'Atropina 1mg IV',
      'N-acetilcisteína IV'
    ],
    correctAnswer: 'Naloxona 0.4mg IV',
    care: [
      'Asegurar vía aérea y ventilación con AMBU.',
      'Administración inmediata de Naloxona.',
      'Vigilancia estrecha de recurrencia de depresión respiratoria.',
      'Control de signos vitales cada 5 minutos.'
    ]
  },
  {
    id: 'pharm-2',
    category: 'pharmacology',
    title: 'Anafilaxia por Antibiótico',
    patient: 'Femenina de 45 años inicia con prurito súbito y edema de glotis tras dosis de Penicilina.',
    vitals: {
      fc: '130 lpm',
      fr: '34 rpm (estridor)',
      pa: '75/40 mmHg',
      temp: '37.0 °C',
      sat: '88%'
    },
    scenario: 'Reacción alérgica severa tipo I (mediada por IgE) con compromiso hemodinámico y respiratorio.',
    treatment: 'Adrenalina 0.5mg IM en cara anterolateral del muslo. Hidrocortisona y Difenhidramina IV.',
    options: [
      'Adrenalina 0.5mg IM',
      'Hidrocortisona 100mg IV',
      'Salbutamol en nebulización',
      'Metilprednisolona 40mg IV'
    ],
    correctAnswer: 'Adrenalina 0.5mg IM',
    care: [
      'Suspensión inmediata del agente causal.',
      'Administración de Adrenalina IM como prioridad absoluta.',
      'Posición de Trendelenburg si no hay dificultad respiratoria severa.',
      'Monitorización continua del ECG y saturación.'
    ]
  },
  {
    id: 'pharm-3',
    category: 'pharmacology',
    title: 'Intoxicación por Benzodiacepinas',
    patient: 'Masculino de 28 años con somnolencia profunda y bradipnea tras ingesta de 30 tabletas de Alprazolam.',
    vitals: {
      fc: '70 lpm',
      fr: '10 rpm',
      pa: '100/60 mmHg',
      temp: '36.0 °C',
      sat: '92%'
    },
    scenario: 'Depresión del SNC moderada-severa, reflejos osteotendinosos disminuidos.',
    treatment: 'Antagonista específico: Flumazenilo 0.2mg IV, repetir hasta 1-2mg según respuesta.',
    options: [
      'Flumazenilo 0.2mg IV',
      'Naloxona 0.4mg IV',
      ' Carbón Activado',
      'Fisostigmina 1mg IV'
    ],
    correctAnswer: 'Flumazenilo 0.2mg IV',
    care: [
      'Vigilancia de la permeabilidad de la vía aérea.',
      'Administración de Flumazenilo vigilando riesgo de convulsiones.',
      'Aspiración gástrica si la ingesta es reciente (<1-2h).',
      'Evaluación del estado de conciencia mediante Escala de Glasgow.'
    ]
  },
  {
    id: 'pharm-4',
    category: 'pharmacology',
    title: 'Intoxicación por Organofosforados',
    patient: 'Femenino de 42 años con miosis, sialorrea, bradicardia y fasciculaciones tras exposición a insecticidas.',
    vitals: {
      fc: '48 lpm',
      fr: '24 rpm (sibilancias)',
      pa: '90/60 mmHg',
      temp: '36.6 °C',
      sat: '90%'
    },
    scenario: 'Síndrome colinérgico por inhibición irreversible de la acetilcolinesterasa.',
    treatment: 'Atropina 1-2mg IV cada 5-10 min hasta atropinización y Pralidoxima.',
    options: [
      'Atropina IV + Pralidoxima',
      'Fisostigmina 0.5mg IV',
      'Naloxona 0.8mg IV',
      'Diazepan 10mg IV'
    ],
    correctAnswer: 'Atropina IV + Pralidoxima',
    care: [
      'Descontaminación externa (quitar ropa, lavar piel).',
      'Succión frecuente de secreciones.',
      'Administración de Atropina hasta secar secreciones bronquiales.',
      'Monitoreo hemodinámico y respiratorio estricto.'
    ]
  },
  {
    id: 'pharm-5',
    category: 'pharmacology',
    title: 'Sobredosis de Digitálicos',
    patient: 'Masculino de 80 años con náuseas, vómitos y visión en halos amarillos. ECG muestra cubeta digitálica y BAV.',
    vitals: {
      fc: '40 lpm',
      fr: '20 rpm',
      pa: '105/65 mmHg',
      temp: '36.4 °C',
      sat: '95%'
    },
    scenario: 'Toxicidad por Digoxina con niveles séricos de 3.5 ng/mL e hiperpotasemia.',
    treatment: 'Anticuerpos específicos (Fab) anti-digoxina y control de electrolitos.',
    options: [
      'Anticuerpos anti-digoxina',
      'Cloruro de Calcio IV',
      'Amiodarona 300mg IV',
      'Isoproterenol 1mg IV'
    ],
    correctAnswer: 'Anticuerpos anti-digoxina',
    care: [
      'Suspensión inmediata de Digoxina.',
      'Evitar Calcio IV (puede agravar arritmias).',
      'Instalar marcapasos transitorio si persiste el bloqueo severo.',
      'Control de niveles de Potasio sérico.'
    ]
  },
  {
    id: 'pharm-6',
    category: 'pharmacology',
    title: 'Intoxicación por Paracetamol',
    patient: 'Femenina de 18 años con dolor en hipocondrio derecho tras ingesta suicida de 15g de Paracetamol hace 8 horas.',
    vitals: {
      fc: '88 lpm',
      fr: '18 rpm',
      pa: '110/70 mmHg',
      temp: '36.8 °C',
      sat: '98%'
    },
    scenario: 'Hepatotoxicidad potencial por depleción de glutatión y acumulación de NABQI.',
    treatment: 'Precursor de glutatión: N-acetilcisteína (NAC) IV o VO según nomograma.',
    options: [
      'N-acetilcisteína (NAC)',
      'Silimarina 140mg VO',
      'L-ornitina L-aspartato',
      'Carbón Activado únicamente'
    ],
    correctAnswer: 'N-acetilcisteína (NAC)',
    care: [
      'Administración precoz de NAC para evitar insuficiencia hepática.',
      'Control de transaminasas y pruebas de coagulación.',
      'Valoración por psicología/psiquiatría tras estabilización.',
      'Balance hídrico y dieta hipoproteica inicial.'
    ]
  },
  {
    id: 'pharm-7',
    category: 'pharmacology',
    title: 'Toxicidad por Litio',
    patient: 'Masculino de 52 años con temblores groseros, ataxia, disartria y confusión progresiva.',
    vitals: {
      fc: '72 lpm',
      fr: '16 rpm',
      pa: '130/80 mmHg',
      temp: '37.0 °C',
      sat: '97%'
    },
    scenario: 'Litemia sérica de 2.8 mEq/L tras deshidratación por tratamiento con diuréticos.',
    treatment: 'Hidratación con solución salina y Hemodiálisis si la litemia es muy alta.',
    options: [
      'Hemodiálisis e Hidratación',
      'Administración de Magnesio IV',
      'Haloperidol 5mg IM',
      'Gluconato de Calcio IV'
    ],
    correctAnswer: 'Hemodiálisis e Hidratación',
    care: [
      'Suspensión inmediata de Litio y diuréticos.',
      'Hidratación con soluciones ricas en sodio para favorecer excreción renal.',
      'Vigilancia neurológica estricta (convulsiones).',
      'Monitorización de función renal.'
    ]
  },
  {
    id: 'pharm-8',
    category: 'pharmacology',
    title: 'Efectos Extrapiramidales por Antipsicóticos',
    patient: 'Masculino de 25 años con distonía aguda (tortícolis y crisis oculógiras) tras dosis de Haloperidol.',
    vitals: {
      fc: '90 lpm',
      fr: '18 rpm',
      pa: '120/80 mmHg',
      temp: '37.2 °C',
      sat: '99%'
    },
    scenario: 'Reacción adversa extrapiramidal aguda por bloqueo dopaminérgico.',
    treatment: 'Anticolinérgico central: Biperideno 2-5mg IM o Difenhidramina IV.',
    options: [
      'Biperideno o Difenhidramina',
      'Bromocriptina 2.5mg VO',
      'Diazepam 10mg IV',
      'Levodopa/Carbidopa VO'
    ],
    correctAnswer: 'Biperideno o Difenhidramina',
    care: [
      'Tranquilizar al paciente (la distonía es muy angustiante).',
      'Administración lenta de medicación rescate.',
      'Ajustar dosis o cambiar fármaco antipsicótico.',
      'Vigila retención urinaria secundaria al anticolinérgico.'
    ]
  },
  {
    id: 'pharm-9',
    category: 'pharmacology',
    title: 'Hipo-glucemia por Insulina',
    patient: 'Femenina de 60 años hallada con diaforesis fría, temblores e inconsciencia tras omitir comida.',
    vitals: {
      fc: '110 lpm',
      fr: '20 rpm',
      pa: '110/65 mmHg',
      temp: '35.9 °C',
      sat: '96%'
    },
    scenario: 'Glucemia capilar de 32 mg/dL. Paciente insulinodependiente.',
    treatment: 'Glucosa IV al 33-50% o Glucagón IM/SC si no hay acceso venoso.',
    options: [
      'Glucosa IV o Glucagón',
      'Suero Fisiológico 500cc',
      'Insulina rápida 2UI SC',
      'Agua con azúcar VO'
    ],
    correctAnswer: 'Glucosa IV o Glucagón',
    care: [
      'Recuperación rápida de la glucemia para evitar daño cerebral.',
      'Control de glucemia capilar cada 15-30 min.',
      'Canalización de vía venosa periférica segura.',
      'Educación sobre dieta y ajuste de dosis de insulina.'
    ]
  },
  {
    id: 'pharm-10',
    category: 'pharmacology',
    title: 'Hipertermia Maligna por Anestésicos',
    patient: 'Masculino de 40 años durante cirugía presenta rigidez muscular masiva, taquicardia y aumento de CO2.',
    vitals: {
      fc: '150 lpm',
      fr: '38 rpm',
      pa: '140/90 mmHg',
      temp: '41.5 °C',
      sat: '85%'
    },
    scenario: 'Reacción farmacogenética severa a Succinilcolina o gases halogenados.',
    treatment: 'Fármaco específico: Dantroleno sódico 2.5mg/kg IV y enfriamiento activo.',
    options: [
      'Dantroleno sódico',
      'Paracetamol 1g IV',
      'Propanolol 1mg IV',
      'Diazepan 10mg IV'
    ],
    correctAnswer: 'Dantroleno sódico',
    care: [
      'Suspensión inmediata de anestésicos gatillo.',
      'Enfriamiento físico agresivo (hielo, líquidos fríos).',
      'Tratamiento de la acidosis metabólica e hiperpotasemia.',
      'Monitorización en cuidados intensivos.'
    ]
  },
  // CASOS DE PATOLOGÍA
  {
    id: 'path-1',
    category: 'pathology',
    title: 'Neumonía con Sepsis',
    patient: 'Masculino de 72 años con fiebre, tos con expectoración purulenta y confusión mental.',
    vitals: {
      fc: '115 lpm',
      fr: '30 rpm',
      pa: '95/60 mmHg',
      temp: '39.2 °C',
      sat: '89%'
    },
    scenario: 'Focos de consolidación en base pulmonar derecha. Alteración del estado de conciencia (qSOFA positivo).',
    diagnosis: 'Neumonía Bacteriana Adquirida en la Comunidad complicándose con Sepsis.',
    options: [
      'Neumonía Bacteriana con Sepsis',
      'Insuficiencia Cardíaca Congestiva',
      'Tromboembolismo Pulmonar',
      'Atelectasia Masiva'
    ],
    correctAnswer: 'Neumonía Bacteriana con Sepsis',
    care: [
      'Iniciar oxigenoterapia para mantener SatO2 >92%.',
      'Toma de hemocultivos y cultivos de esputo.',
      'Administración de antibióticos de amplio espectro en la primera hora.',
      'Manejo de líquidos para mantener PAM >65 mmHg.'
    ]
  },
  {
    id: 'path-2',
    category: 'pathology',
    title: 'Infarto Agudo al Miocardio (IAM)',
    patient: 'Masculino de 58 años con dolor opresivo retroesternal irradiado a mandíbula y brazo izquierdo.',
    vitals: {
      fc: '108 lpm (arrítmico)',
      fr: '24 rpm',
      pa: '160/95 mmHg',
      temp: '36.8 °C',
      sat: '93%'
    },
    scenario: 'Diaforesis profusa, palidez cutánea y sensación de muerte inminente. ECG muestra elevación del segmento ST en V1-V4.',
    diagnosis: 'Infarto Agudo al Miocardio con Elevación del ST (IAMCEST) anteroseptal.',
    options: [
      'Infarto Agudo al Miocardio (IAMCEST)',
      'Angina de Pecho Estable',
      'Pericarditis Aguda',
      'Disección Aórtica'
    ],
    correctAnswer: 'Infarto Agudo al Miocardio (IAMCEST)',
    care: [
      'Administrar Oxígeno si SatO2 <94%.',
      'Monitoreo cardíaco continuo y ECG de 12 derivaciones.',
      'Administración de Aspirina y Clopidogrel según protocolo.',
      'Preparar para reperfusión inmediata (Angioplastia/Fibrinolisis).'
    ]
  },
  {
    id: 'path-3',
    category: 'pathology',
    title: 'Cetoacidosis Diabética (CAD)',
    patient: 'Femenina de 24 años con aliento cetósico (manzana), deshidratación y respiración rápida y profunda.',
    vitals: {
      fc: '120 lpm',
      fr: '28 rpm (Kussmaul)',
      pa: '90/50 mmHg',
      temp: '37.1 °C',
      sat: '97%'
    },
    scenario: 'Glucemia capilar de 450 mg/dL, cetonuria (+++) y dolor abdominal difuso.',
    diagnosis: 'Cetoacidosis Diabética severa.',
    options: [
      'Cetoacidosis Diabética',
      'Estado Hiperosmolar Hiperglucémico',
      'Abdomen Agudo Quirúrgico',
      'Intoxicación por Salicilatos'
    ],
    correctAnswer: 'Cetoacidosis Diabética',
    care: [
      'Hidratación agresiva con Solución Salina 0.9%.',
      'Iniciación de infusión de Insulina rápida.',
      'Monitoreo estricto de Potasio sérico.',
      'Control horario de glucemia y cetonemia.'
    ]
  },
  {
    id: 'path-4',
    category: 'pathology',
    title: 'Accidente Cerebrovascular (ACV)',
    patient: 'Masculino de 65 años con hemiparesia derecha súbita, desviación de la comisura bucal y afasia.',
    vitals: {
      fc: '88 lpm',
      fr: '18 rpm',
      pa: '190/110 mmHg',
      temp: '36.5 °C',
      sat: '96%'
    },
    scenario: 'Puntuación de 14 en la escala NIHSS. Tiempo de evolución: 2 horas desde el inicio de síntomas.',
    diagnosis: 'ACV Isquémico Agudo en territorio de la arteria cerebral media izquierda.',
    options: [
      'ACV Isquémico Agudo',
      'Hemorragia Intracraneal',
      'Ataque Isquémico Transitorio (AIT)',
      'Migraña con Aura'
    ],
    correctAnswer: 'ACV Isquémico Agudo',
    care: [
      'Mantenimiento de la vía aérea y cabecera a 30°.',
      'TC de cráneo urgente para descartar hemorragia.',
      'Control estricto de la Tensión Arterial.',
      'Valorar criterios para Terapia Trombolítica.'
    ]
  },
  {
    id: 'path-5',
    category: 'pathology',
    title: 'Edema Agudo de Pulmón (EAP)',
    patient: 'Femenina de 75 años con disnea paroxística nocturna, ortopnea y expectoración rosada espumosa.',
    vitals: {
      fc: '125 lpm',
      fr: '34 rpm',
      pa: '180/100 mmHg',
      temp: '36.2 °C',
      sat: '82%'
    },
    scenario: 'Estertores crepitantes húmedos en ambos campos pulmonares ("pulmón húmedo"). Uso de musculatura accesoria.',
    diagnosis: 'Edema Agudo de Pulmón de origen cardiogénico.',
    options: [
      'Edema Agudo de Pulmón',
      'Crisis Asmática Severa',
      'Tromboembolismo Pulmonar',
      'Neumonía Bilateral'
    ],
    correctAnswer: 'Edema Agudo de Pulmón',
    care: [
      'Posición de Fowler alta (sentado).',
      'Oxigenoterapia de alto flujo / VMNI si es necesario.',
      'Administración de diuréticos de asa (Furosemida) IV.',
      'Control estricto de diuresis con sonda vesical.'
    ]
  },
  {
    id: 'path-6',
    category: 'pathology',
    title: 'Crisis Hipertensiva - Emergencia',
    patient: 'Masculino de 50 años con cefalea intensa, visión borrosa y epistaxis masiva.',
    vitals: {
      fc: '95 lpm',
      fr: '20 rpm',
      pa: '220/130 mmHg',
      temp: '36.7 °C',
      sat: '98%'
    },
    scenario: 'Fondo de ojo muestra papiledema. Paciente presenta desorientación progresiva.',
    diagnosis: 'Emergencia Hipertensiva con Encefalopatía.',
    options: [
      'Emergencia Hipertensiva',
      'Urgencia Hipertensiva',
      'Crisis de Ansiedad',
      'ACV Hemorrágico'
    ],
    correctAnswer: 'Emergencia Hipertensiva',
    care: [
      'Reducción controlada de la PAM (no más del 20-25% en la primera hora).',
      'Administración de antihipertensivos IV (Labetalol/Nitroprusiato).',
      'Monitoreo invasivo de la PA si es posible.',
      'Evaluación neurológica continua.'
    ]
  },
  {
    id: 'path-7',
    category: 'pathology',
    title: 'Choque Anafiláctico',
    patient: 'Femenina de 30 años con prurito generalizado, estridor laríngeo y angioedema tras picadura de insecto.',
    vitals: {
      fc: '135 lpm',
      fr: '32 rpm',
      pa: '75/40 mmHg',
      temp: '37.5 °C',
      sat: '88%'
    },
    scenario: 'Presencia de sibilancias inspiratorias y espiratorias. Urticaria evidente en tórax y abdomen.',
    diagnosis: 'Choque Anafiláctico Grado IV.',
    options: [
      'Choque Anafiláctico',
      'Crisis de Pánico',
      'Edema de Glotis Aislado',
      'Síncope Vasovagal'
    ],
    correctAnswer: 'Choque Anafiláctico',
    care: [
      'Administración inmediata de Adrenalina IM (0.5 mg).',
      'Asegurar vía aérea (preparar intubación).',
      'Reposición rápida de volumen con cristaloides.',
      'Administración de corticoides y antihistamínicos IV.'
    ]
  },
  {
    id: 'path-8',
    category: 'pathology',
    title: 'Apendicitis Aguda',
    patient: 'Masculino de 19 años con dolor abdominal que inició en epigastrio y migró a fosa ilíaca derecha.',
    vitals: {
      fc: '105 lpm',
      fr: '20 rpm',
      pa: '115/75 mmHg',
      temp: '38.3 °C',
      sat: '99%'
    },
    scenario: 'Signo de McBurney positivo, Blumberg positivo. Náuseas y anorexia.',
    diagnosis: 'Apendicitis Aguda supurativa.',
    options: [
      'Apendicitis Aguda',
      'Cólico Renoureteral',
      'Diverticulitis Meckel',
      'Gastroenteritis Aguda'
    ],
    correctAnswer: 'Apendicitis Aguda',
    care: [
      'Mantener NPO (Ayuno absoluto).',
      'Canalización de vía periférica e hidratación.',
      'Preparación preoperatoria (consentimiento/exámenes).',
      'Administración de analgesia y antibióticos profilácticos.'
    ]
  },
  {
    id: 'path-9',
    category: 'pathology',
    title: 'Obstrucción Intestinal',
    patient: 'Femenina de 68 años con distensión abdominal progresiva, vómitos fecaloideos y ausencia de canalización de gases.',
    vitals: {
      fc: '112 lpm',
      fr: '24 rpm',
      pa: '100/60 mmHg',
      temp: '37.8 °C',
      sat: '94%'
    },
    scenario: 'Ruidos hidroaéreos de lucha metálicos. Antecedente de cirugía abdominal hace 10 años.',
    diagnosis: 'Obstrucción Intestinal por Bridas/Adherencias.',
    options: [
      'Obstrucción Intestinal',
      'Peritonitis Generalizada',
      'Íleo Paralítico Postoperatorio',
      'Vólvulo de Sigmoides'
    ],
    correctAnswer: 'Obstrucción Intestinal',
    care: [
      'Colocación de Sonda Nasogástrica a derivación.',
      'Balance hídrico estricto y corrección electrolítica.',
      'Descompresión rectal si es necesario.',
      'Vigilar signos de perforación (abdomen en tabla).'
    ]
  },
  {
    id: 'path-10',
    category: 'pathology',
    title: 'Hemorragia Digestiva Alta (HDA)',
    patient: 'Masculino de 55 años con hematemesis masiva y melenas. Antecedente de consumo crónico de AINEs.',
    vitals: {
      fc: '128 lpm',
      fr: '22 rpm',
      pa: '85/50 mmHg',
      temp: '36.5 °C',
      sat: '92%'
    },
    scenario: 'Palidez mucocutánea extrema, mareo ortostático y sed intensa.',
    diagnosis: 'Hemorragia Digestiva Alta no varicosa.',
    options: [
      'Hemorragia Digestiva Alta',
      'Hemorragia Digestiva Baja',
      'Gastritis Aguda Erosiva',
      'Hemoptisis'
    ],
    correctAnswer: 'Hemorragia Digestiva Alta',
    care: [
      'Protección de vía aérea (riesgo de aspiración).',
      'Canalización de dos vías de grueso calibre (14-16G).',
      'Reposición de volumen y preparación para transfusión.',
      'Infusión de IBP (Omeprazol) a dosis altas.'
    ]
  },
  {
    id: 'path-11',
    category: 'pathology',
    title: 'Pancreatitis Aguda',
    patient: 'Femenina de 45 años con dolor epigástrico en "cinturón" irradiado a espalda tras ingesta copiosa.',
    vitals: {
      fc: '110 lpm',
      fr: '22 rpm',
      pa: '110/70 mmHg',
      temp: '37.9 °C',
      sat: '95%'
    },
    scenario: 'Amilasa y Lipasa sérica elevadas 5 veces su valor normal. Abdomen muy doloroso a la palpación.',
    diagnosis: 'Pancreatitis Aguda litiásica.',
    options: [
      'Pancreatitis Aguda',
      'Cólico Biliar',
      'Úlcera Péptica Perforada',
      'Colecistitis Aguda'
    ],
    correctAnswer: 'Pancreatitis Aguda',
    care: [
      'Reposo digestivo absoluto (NPO).',
      'Analgesia potente (evitar morfina, preferir Meperidina/Tramadol).',
      'Hidratación endovenosa profusa.',
      'Control de signos vitales cada 2-4 horas.'
    ]
  },
  {
    id: 'path-12',
    category: 'pathology',
    title: 'Tromboembolismo Pulmonar (TEP)',
    patient: 'Masculino de 70 años con disnea súbita y dolor torácico pleurítico tras cirugía de cadera reciente.',
    vitals: {
      fc: '118 lpm',
      fr: '28 rpm',
      pa: '115/80 mmHg',
      temp: '37.2 °C',
      sat: '89%'
    },
    scenario: 'Presencia de edema y dolor en miembro inferior izquierdo (TVP). ECG muestra patrón S1Q3T3.',
    diagnosis: 'Tromboembolismo Pulmonar de riesgo intermedio.',
    options: [
      'Tromboembolismo Pulmonar',
      'Neumotórax a Tensión',
      'Neumonía Nosocomial',
      'Insuficiencia Cardíaca Aguda'
    ],
    correctAnswer: 'Tromboembolismo Pulmonar',
    care: [
      'Administrar oxigenoterapia inmediata.',
      'Mantener al paciente en reposo absoluto (evitar embolismo).',
      'Iniciar anticoagulación con Heperina de bajo peso molecular.',
      'Monitoreo continuo de SatO2 y FR.'
    ]
  }
];
