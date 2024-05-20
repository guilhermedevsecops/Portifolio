import React from 'react'
import style from '../styles/scss/Apresentation.module.scss'
import authorImage from '../assets/author.jpg';
const Apresentation = () => {
    return (
        <div className={style.containerApresentation}>
            <div className={style.title}>
                <h1>Bem Vindo ao Meu Web-Site</h1>
            </div>
            <div className={style.container}>
                <div className={style.image}>
                    <img src={authorImage} />
                </div>
                <div className={style.description}>
                    <p>Olá meu nome é Guilherme, seja bem vindo ao meu website!</p>

                    <p>Este é um espaço onde irei postar meus recentes trabalhos e aprendizados ao longo da carreira.</p>
                    <p>Espero que gostem.</p>
                </div>

            </div>

            <div className={style.aboutText}>
                <h2>Sobre</h2>
            </div>
            <div className={style.about}>
                <p>Sou tecnólogo em Análise e Desenvolvimento de Sistemas, com pós-graduação em Cibersegurança e MBA em Banco de Dados. Atualmente, estou concluindo minha terceira pós-graduação, desta vez em Arquitetura de Software com ênfase em Java. Quanto mais estudo na área de Tecnologia, mais me apaixono pelo aprendizado, o que me motiva a buscar continuamente novos conhecimentos.</p>

                <p>Tenho experiência em Desenvolvimento, participando de projetos de criações de chatbots em NodeJS, microserviços em Java, orquestração de containers com Docker e projetos utilizando Spring Boot. Também possuo habilidades no Desenvolvimento Front-end utilizando o framework ReactJS.</p>

                <p>Possuo conhecimentos em monitoramento de SOC utilizando Zabbix, onde realizei diversas automações para integração com outros sistemas, além de Grafana e Prometheus. Tenho experiência com serviços de mensageria como RabbitMQ, criando automações e microserviços para uma resposta rápida a incidentes. Além disso, tenho expertise na administração de firewalls como SonicWall, Fortigate e PFSense, e em EPOs da McAfee e Trellix.</p>

                <p>Para finalizar, possuo habilidades em administração e criação de rotinas em bancos de dados, além de gerar automações de ETL e realizar a manutenção e criação de querys complexas.</p>

                <p>Clique em um dos temas ao lado e conheça meus projetos.</p>
            
            </div>
            

        </div >
    )
}

export default Apresentation