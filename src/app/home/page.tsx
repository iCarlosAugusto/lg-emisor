import Button from '@/components/button'
import React, { Fragment } from 'react'

export default function Home() {
  return (

    <Fragment>
        <div className="flex flex-col lg:flex-row justify-evenly p-10">
            <div className="self-center">
                <div className="flex items-center lg:items-start flex-col">
                    <h1 className="text-5xl font-bold text-center">Emissor de Notas Fiscais grátis - NFe+</h1>
                    <p className='text-slate-400 mt-5'>Cadastre seus produtos, tributação e contatos para simplificar<br/> a emissão de notas fiscais eletrõnicas</p>
                    <div className="mt-5">
                        <Button label="Comece agora" className='sticky top-0'/>
                        <a href="#" className="ml-5">Fale com a nossa equipe</a>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <iframe src="https://lottie.host/embed/46fe1bdb-0ab3-4e23-a782-7fd173f22beb/n36HojayfD.json" width={300} height={300} >
                </iframe>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-10 px-10">
            <span className='text-3xl font-bold'>Planos exclusivos para contadores</span>
            <span className='text-slate-400 text-center mt-5'>Com a representação do Nfe+ e eGestor, você pode criar e gerenciar sua própria carteira de clientes, <br/>garantindo uma receita recorrente e previsível para o seu negócio.</span>
            
            <Button label="Sou contador" className="mt-5"/>
        </div>

        <div className="w-full bg-green-600 flex flex-col items-center justify-center p-10 mt-10">
            <span className='text-3xl font-bold'>
                Benificios
            </span>


            {/* <div className="grid bg-blue-100 w-full"> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 w-full">
                <div className="p-10 border rounded-lg flex flex-col">
                    <span className="font-bold text-3xl">Rapidez</span>

                    <span className="mb-5 font-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero fugiat maiores eveniet error animi tenetur, voluptates ipsam nemo sunt iste accusamus deserunt distinctio! Dicta, architecto. Iste perspiciatis officiis rerum.
                    </span>
                </div>
                <div className="p-10 border rounded-lg flex flex-col">
                    <span className="font-bold text-3xl">Agilidade</span>
                    <span className="mb-5 font-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero fugiat maiores eveniet error animi tenetur, voluptates ipsam nemo sunt iste accusamus deserunt distinctio! Dicta, architecto. Iste perspiciatis officiis rerum.
                    </span>
                </div>
                <div className="p-10 border rounded-lg flex flex-col">
                    <span className="font-bold text-3xl">Economia</span>
                    <span className="mb-5 font-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero fugiat maiores eveniet error animi tenetur, voluptates ipsam nemo sunt iste accusamus deserunt distinctio! Dicta, architecto. Iste perspiciatis officiis rerum.
                    </span>
                </div>
                <div className="p-10 border rounded-lg flex flex-col">
                    <span className="font-bold text-3xl">Sem burocracia</span>
                    <span className="mb-5 font-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero fugiat maiores eveniet error animi tenetur, voluptates ipsam nemo sunt iste accusamus deserunt distinctio! Dicta, architecto. Iste perspiciatis officiis rerum.
                    </span>
                </div>
                <div className="p-10 border rounded-lg flex flex-col">
                    <span className="font-bold text-3xl">Não perca clientes</span>
                    <span className="mb-5 font-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero fugiat maiores eveniet error animi tenetur, voluptates ipsam nemo sunt iste accusamus deserunt distinctio! Dicta, architecto. Iste perspiciatis officiis rerum.
                    </span>
                </div>
                <div className="p-10 border rounded-lg flex flex-col">
                    <span className="font-bold text-3xl">Segurança</span>
                    <span className="mb-5 font-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero fugiat maiores eveniet error animi tenetur, voluptates ipsam nemo sunt iste accusamus deserunt distinctio! Dicta, architecto. Iste perspiciatis officiis rerum.
                    </span>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 p-10">
            <span className="text-3xl font-bold">Planos e preços</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 w-full">
                <div className="p-10 border rounded-lg flex flex-col">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-3xl">Básico 😁</span>
                        <span className="font-bold">R$ 20/mês</span>
                    </div>

                    <span className="text-gray-400 mb-5 font-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero fugiat maiores eveniet error animi tenetur, voluptates ipsam nemo sunt iste accusamus deserunt distinctio! Dicta, architecto. Iste perspiciatis officiis rerum.
                    </span>
                    <Button label="Quero esse"/>
                </div>
                <div className="p-10 border rounded-lg flex flex-col">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-3xl">Intermediário 😎</span>
                        <span className="font-bold">R$ 30/mês</span>
                    </div>


                    <span className="text-gray-400 mb-5 font-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero fugiat maiores eveniet error animi tenetur, voluptates ipsam nemo sunt iste accusamus deserunt distinctio! Dicta, architecto. Iste perspiciatis officiis rerum.
                    </span>
                    <Button label="Quero esse"/>
                </div>
                <div className="p-10 border rounded-lg flex flex-col">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-3xl">Interprise 🤯</span>
                        <span className="font-bold">R$ 50/mês</span>
                    </div>

                    <span className="text-gray-400 mb-5  font-light">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta libero fugiat maiores eveniet error animi tenetur, voluptates ipsam nemo sunt iste accusamus deserunt distinctio! Dicta, architecto. Iste perspiciatis officiis rerum.
                    </span>
                    <Button label="Quero esse"/>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 mb-10">
            <span className="text-3xl font-bold text-center">Adquira o sistema online de emissão de NFe</span>
            <span>Faça o teste gratuitamente sem compromisso!</span>
            <Button label="Testar gratuitamente" className="mt-5"/>
        </div>
    </Fragment>
  )
}
