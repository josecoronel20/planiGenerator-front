
## 🎯 Páginas Principales

### **Home (`/`)**
- Visualización de planificaciones semanales
- Selector de días de entrenamiento
- Detalles de ejercicios por día
- Modal para editar ejercicios

### **Formulario de Rutina (`/workoutGenForm`)**
- Configuración personalizada de entrenamiento
- Selección de días, split y experiencia
- Validación de formularios con Zod
- Generación de prompts para IA

### **Autenticación**
- **Login (`/login`)**: Inicio de sesión
- **Register (`/register`)**: Registro de usuarios

## 🗄️ Modelos de Datos

### Usuario
```typescript
interface CredentialsGetMe {
  id: number;
  email: string;
  username: string;
  workout: workout;
}
```

### Ejercicio
```typescript
type Exercise = {
  id: string;
  exercise: string;
  sets: number[];
  weight: number;
};
```

### Planificación
```typescript
type workout = {
  [day: string]: Exercise[];
};
```

## 🔐 Autenticación y Seguridad

### Middleware de Protección
```typescript
// middleware.ts
export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const isLoggedIn = !!token;
  
  if (!isLoggedIn && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
```

### Gestión de Estado
- **Zustand** para estado global de planificaciones
- **SWR** para data fetching con cache
- **React Hook Form** para formularios

## 🎨 Sistema de Diseño

### Colores Principales
- **Primario**: `#e63946` (Rojo)
- **Fondo**: `#000000` (Negro)
- **Gris**: `#1f2937` (Gray-800)
- **Texto**: `#ffffff` (Blanco)

### Componentes Reutilizables
- **Nav**: Navegación responsive con dropdown
- **ExerciseCard**: Tarjetas de ejercicios
- **ExerciseModal**: Modal de edición
- **DaySelector**: Selector de días

## �� Instalación Rápida

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar en desarrollo
npm run dev
```

## 🔧 Variables de Entorno

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🛠️ Scripts Disponibles

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 📱 Características Responsive

### Navegación
- **Desktop**: Navegación horizontal con dropdown
- **Mobile**: Menú hamburguesa con overlay

### Componentes
- **Grid adaptativo** para ejercicios
- **Modal responsive** para edición
- **Formularios optimizados** para móvil

## 🔄 Flujo de Datos

### Autenticación
1. **Login/Register** → API call → JWT cookie
2. **Middleware** → Verifica token → Redirige
3. **useGetMe** → SWR fetch → Estado global

### Planificaciones
1. **Formulario** → Validación Zod → Prompt
2. **API call** → Backend → Planificación
3. **Estado global** → UI update → Persistencia

## �� Funcionalidades Clave

### Gestión de Ejercicios
```typescript
// Edición en tiempo real
const handleReps = (index: number, value: number) => {
  const newReps = [...reps];
  newReps[index] = value;
  setReps(newReps);
  updateExercise({ ...exercise, sets: newReps });
};
```

### Validación de Formularios
```typescript
// Esquema Zod
const formSchema = z.object({
  trainingDays: z.string().min(1, "Días requeridos"),
  experience: z.string().min(1, "Experiencia requerida"),
  priority: z.string().min(1, "Prioridad requerida"),
});
```

### Estado Global
```typescript
// Zustand store
export const useWorkoutStore = create<WorkoutState>((set) => ({
  workout: [],
  setWorkout: (exercises) => set({ workout: exercises }),
  updateExercise: (updated) => set((state) => ({
    workout: state.workout.map((ex) =>
      ex.id === updated.id ? updated : ex
    ),
  })),
}));
```

## 📊 Métricas del Proyecto

- **Componentes**: 15+
- **Páginas**: 4
- **Hooks personalizados**: 2
- **Tipos TypeScript**: 8
- **Esquemas de validación**: 3
- **Líneas de código**: ~800

## �� Logros de UX/UI

- ✅ **Diseño moderno** con tema oscuro
- ✅ **Navegación intuitiva** con breadcrumbs
- ✅ **Feedback visual** en formularios
- ✅ **Responsive design** mobile-first
- ✅ **Accesibilidad** con ARIA labels
- ✅ **Performance optimizada** con Next.js

## 🚀 Próximos Pasos

- [ ] **PWA** con service workers
- [ ] **Offline support** con cache
- [ ] **Animaciones** con Framer Motion
- [ ] **Tests** con Jest + Testing Library
- [ ] **Storybook** para documentación de componentes
- [ ] **Analytics** con Google Analytics
- [ ] **SEO optimizado** con meta tags

## 🔧 Desarrollo

### Estructura de Componentes
- **Atomic Design**: Atoms → Molecules → Organisms
- **Composition over inheritance**
- **Props drilling** minimizado con Zustand

### Patrones Utilizados
- **Custom hooks** para lógica reutilizable
- **Compound components** para flexibilidad
- **Render props** para configuración
- **Context providers** para estado global
