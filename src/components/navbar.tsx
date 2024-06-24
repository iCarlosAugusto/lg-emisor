import React from 'react'
import Button from './button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-around py-5">
        <div>
            <Link href="/home">Lojas Gregy</Link>
        </div>
        <div className="flex items-center justify-center gap-5">
     
            <Button label="Criar conta grátis"/>
            <Button label="Acessar"/>
        </div>
    </div>
  )
}
