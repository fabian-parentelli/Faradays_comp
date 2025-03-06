# Faradays Components

**Versión:** 2.0.7

## Spinner

**Versión:** 0.0.0

El componente `Spinner` es un elemento visual que muestra al usuario que una operación está en progreso y que debe esperar mientras se carga contenido o se completa una acción en segundo plano.


```jsx
import { Spinner } from 'faradaycomp';

const app = () => {
    return (
        <div>
            <Spinner color="blue" size={50} />
        </div>
    );
};

export default app;
```

#### Props:

- **`color`** (string): Define el color del loader. Debe ser un valor válido en CSS, como un nombre de color (`"red"`), un valor hexadecimal (`"#3498db"`), o cualquier otro formato de color compatible.
  
- **`size`** (number): Define el tamaño del loader en píxeles. Inluye la unidad de medida.


---


## Icons

**Versión:** 0.0.4


El componente `Icon....` muestra un ícono que se puede personalizar en color, tamaño y agregar una acción al hacer clic.

```jsx
import IconCheck from "./icons/IconCheck";

const app = () => {
    return (
        <div>
            <IconCheck 
                color="black" 
                size="50px" 
                onClick={()=> console.log('hace click')}
                backCol='green'
                bold={1}
            />;
        </div>
    );
};

export default app;
```

#### Props:

- **`color`** (string): Define el color del ícono. Debe ser un valor válido en CSS, como un nombre de color (`"red"`), un valor hexadecimal (`"#3498db"`), o cualquier otro formato de color compatible.
  
- **`size`** (number): Define el tamaño del ícono en píxeles. El valor debe ser una cadena de texto que contenga el tamaño seguido de las unidades, como "50px" o "2rem".

- **`onClick`** (function): Define la función a ejecutar cuando se haga clic en el ícono.

- **`backCol`** (string): Algunos iconos tiene color de background, pero no todos.

- **`bold`** (number): permitiendo ajustar el grosor de los trazos o contornos del vector.

    * IconCheck. 
    * IconCross.
    * IconWarning.
    * IconInfo.
    * IconMenu.
    * IconHome
    * IconNetworks
    * IconBag
    * IconMessage
    * IconBell
    * IconBook
    * IconCode
    * IconIcons
    * IconNews
    * IconUser
    * IconUsers
    * IconApp
    * IconCopy
    * IconDots
    * IconCalendar
    * IconClipBoard
    * IconClock
    * IconCreditCard
    * IconMap
    * IconFacebook
    * IconX
    * IconYoutube
    * IconLinkedin
    * IconInstagram
    * IconNpm


---



## SnackBar

**Versión:** 0.0.1


El componente `SnackBar` un tipo de notificación temporal que aparece en la parte inferior de la interfaz de usuario (generalmente en la parte inferior) para proporcionar retroalimentación o alertar al usuario sobre una acción o evento sin interrumpir su flujo de trabajo.

```jsx
import Snackbar from "./components/SnackBar/SnackBar";

const app = () => {
    return (
        <div>
            <Snackbar snack={{open: true, message: 'Mensjae de prueba', status: 'error' } duration={5000}} />
        </div>
    );
};

export default app;
```

#### Props:

- **`snack`** (Object): Se requiere un objeto con tres valores, open, message y status.

- **`duration`** (Numbre): Se define el tiempo de la duracion en microsegundo, por defecto viene en 4000.

- **`open`** (boolean): Determina si la ventana de notificación debe estar visible o no. Si el valor es (`"true"`), la notificación se muestra, y si es (`"false"`), permanece oculta.
  
- **`message`** (string): Define el mensaje que se mostrará en la notificación. Es un texto que comunica al usuario alguna información importante.

- **`status`** (string): Indica el estado de la notificación, que puede influir en su estilo. Los valores son:

* "success": Para mostrar una notificación de éxito (por ejemplo, "Operación exitosa").
* "error": Para indicar un error o algo que no se pudo completar correctamente.
* "warning": Para advertencias que requieren atención pero no son críticas.
* "info": Para mensajes informativos o de estado.


---



## Loader

**Versión:** 0.0.0


El componente `Loader` es un componente visual utilizado en las interfaces de usuario para indicar que una operación o proceso está en progreso.

```jsx
import Loader from "./components/Loader/Loader";

const app = () => {
    return (
        <div>
            <Loader loading={true} color='red' />
        </div>
    );
};

export default app;
```

#### Props:

- **`loading`** (boolean): Determina si el loading es visible o no.
  
- **`color`** (string): Define el color del ícono. Debe ser un valor válido en CSS, como un nombre de color (`"red"`), un valor hexadecimal (`"#3498db"`), o cualquier otro formato de color compatible.



---



## AutoComplete

**Versión:** 0.0.1


El componente `AutoComplete` es un componente de interfaz de usuario que permite a los usuarios buscar y seleccionar opciones de una lista filtrada mientras escriben en un campo de entrada (input).

```jsx
import { AutoComplete } from 'faradays_comp';
import { useState } from 'react';

const app = () => {

    const [data, setData] = useState(null);

    const options = [
        { label: 'Apple', id: 1 },
        { label: 'Banana', id: 2 },
        { label: 'Orange', id: 3 },
        { label: 'Grapes', id: 4 },
        { label: 'Pineapple', id: 5 },
    ];

    return (
        <div>
            <AutoComplete 
                options={options} 
                labelKey='label' 
                setData={setData} 
                style={{
                    width: '300px',
                    height: '50px',
                    placeholder: 'Buscar info...'
                }} 
            />
        </div>
    );
};

export default app;
```

#### Props:

- **`options`** (array): Este es un array de opciones que el componente Autocomplete usará para realizar la búsqueda y mostrar las sugerencias al usuario. Cada elemento del array representa una opción que el usuario puede seleccionar.
  
- **`labelKey`** (string): define la propiedad que se utilizará para mostrar las opciones. En este caso, el valor 'label' indica que el componente buscará una propiedad llamada label dentro de cada objeto en options para mostrarla al usuario.

- **`setData`** (set-state): Es una función que se ejecuta cuando el usuario selecciona una opción de la lista. Recibe como parámetro la opción seleccionada y generalmente se usa para actualizar el estado de la aplicación con la opción seleccionada.

- **`style`** (object): Es un objeto que permite personalizar el estilo del componente Autocomplete. En este caso, estás pasando un objeto con varias propiedades de estilo, como width, height, y placeholder.

    * **`width`** Define el ancho del campo de entrada. En este caso, se establece en '300px', lo que significa que el campo de entrada tendrá un ancho de 300 píxeles.

    * **`height`** Define la altura del campo de entrada. Se establece en '50px', por lo que el campo de entrada tendrá una altura de 50 píxeles.
    
    * **`placeholder`** Es un atributo que proporciona un texto de ejemplo o sugerencia dentro del campo cuando está vacío.



    ---



## ScrollToTop

**Versión:** 0.0.0


El componente `ScrollToTop` escucha los cambios de ubicación en la navegación (mediante popstate, pushState y replaceState) y automáticamente desplaza la página hacia la parte superior cada vez que se cambia de ruta.

```jsx
import { ScrollToTop } from 'faradays_comp';

const app = () => {

    return (
        <div className='App'>
            <ScrollToTop>

                <RoutesComp /> 
                 {/* Escucha los cambios de este componente que maneja las rutas de mi app. */}

            </ScrollToTop>
        </div>
    );
};

export default app;
```

#### Children:

- **`children`** (children): El componente ScrollToTop debe ser el contenedor principal de tu aplicación que maneja todas las rutas. Esto permite que se escuchen todos los cambios de ruta, y al cambiar de página, automáticamente realiza un desplazamiento hacia la parte superior de la aplicación.



    ---



## TextAreaExpand

**Versión:** 0.0.0


El componente `TextAreaExpand` es un campo de texto expandible que permite personalizar su apariencia y comportamiento. Recibe props como el placeholder, value, handleChange, name, required y style para ajustarse a las necesidades del usuario. La función handleChange se encarga de gestionar los cambios en el valor del textarea, permitiendo que se actualice su contenido de forma controlada.

```jsx
import { TextAreaExpand } from 'faradays_comp';
import { useState } from 'react';

const app = () => {

    const [values, setValues] = useState({ message: lorem });

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <div className='body'>
            <h2>Body</h2>

            <TextAreaExpand
                placeholder={'Este es el placeholder'}
                value={values.message} // Obligatorio
                handleChange={handleChange} // Obligatorio
                name='message' // Obligatorio
                required={true}
                style={{
                    width: '300px',
                    border: '1px solid red',
                    borderRadius: '6px',
                    color: 'orange',
                    backgroundColor: 'green'
                }}
            />

        </div>
    );
};

export default app;
```

#### props:

- **`placeholder`** (string): Es el texto que aparece en el campo de texto cuando está vacío, proporcionando una pista sobre el tipo de información que se debe ingresar. Es opcional y su valor predeterminado es 'Completa este campo' si no se especifica.

- **`value`** (string): Es el valor actual del campo de texto. Este prop es obligatorio, ya que se usa para manejar el valor de entrada y actualizarlo en el estado del componente principal. Permite que el campo de texto sea controlado.

- **`handleChange`** (función): Es una función que se llama cada vez que el usuario modifica el contenido del textarea. Esta función debe manejar el cambio en el valor del campo y actualizar el estado en el componente padre, permitiendo que el componente se mantenga sincronizado con el valor que se introduce.

- **`name`** (string): Es el nombre del campo, que se usa para identificarlo en formularios o en el estado del componente. Es opcional y su valor predeterminado es 'message' si no se especifica.

- **`required`** (boolean): Define si el campo es obligatorio o no. Si se establece como true, el formulario no podrá enviarse sin que se haya completado este campo.

- **`style`** (CSSProperties): Es un (`"objeto"`) de estilos CSS en línea que se aplica al textarea. Este prop es opcional y permite personalizar el estilo del componente, como el ancho, el color de fondo o el borde.

    * width
    * border
    * borderRadius
    * color
    * backgroundColor