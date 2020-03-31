import  React, { useState } from 'react';

import './styles.css';

import LogoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import Api from '../../services/api'

export default function Register() {
    const [name, setName] = new useState('');
    const [email, setEmail] = new useState('');
    const [whatsapp, setWhatsapp] = new useState('');
    const [city, setCity] = new useState('');
    const [uf, setUf] = new useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, 
            email, 
            whatsapp,
            city, 
            uf
        };
        
       try
       {
            const response = await Api.post('ongs', data);

            alert(`seu id de acesso: ${response.data.id}`)
        } catch(err) {
            alert('Erro no cadastro tente novamente')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be the hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o Login
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}