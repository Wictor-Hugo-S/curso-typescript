import './style.css'

type CardProps={

    title:string;
    description:string;
    img?:string;
    hasButton?:boolean;
    hasDescription?:boolean
}

const Cartes = ( { 
    title='', 
    description='', 
    img='',
    hasButton=false,
    hasDescription=false 
} : CardProps) => {
    return (

        <div>

            <div className='teste'>
                <img src={img}></img>
                <h1>{title}</h1>
                {hasDescription && <span>{description}</span>}

                {hasButton&& <button>COmprar</button>}
            </div>
        </div>

    )


}




export default function Card() {

    return (
        <>
            <Cartes title='teste' description='testando' hasDescription hasButton />

        </>
    )
}