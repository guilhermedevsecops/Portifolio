import React from 'react'
import style from '../styles/scss/Apresentation.module.scss'

const Apresentation = () => {
    return (
        <div className={style.containerApresentation}>
            <div className={style.title}>
                <h1>Bem Vindo ao Meu Web-Site</h1>
            </div>
            <div>
                <p>Olá meu nome é Guilherme, seja bem vindo ao meu website!</p>
                
                <p>Este é um espaço onde irei postar meus recentes trabalhos e aprendizados ao longo da carreira </p>
                   <p>Espero que Gostem.</p>
            </div>
            
            <div>
                <h2>Sobre</h2>
                <hr/>
                
                <p>Sou tecnologo em Analise e Desenvolvimento de Sistemas, com pós graduação em Cybersegurança e MBA de Banco de Dados, Atualmente estou completando minha 3° Pós-Graduaçaão como Arquiteto de software com enfase em Java, o que posso dizer e que quanto mais estudo na aréa da Tecnologia mais sinto gosto pelo aprendizado fazendo assim com que eu busque cada dia mais conhecimentos relacionados a área</p>
                
                <p>Possuo experiência na aréa de Desenvolvimento efetuando criação de chatboots em linguagem NodeJS, Microserviços em Java, orquestração de containers em Docker, projetos em Springboot, além de possuir habilidades de Desenvolvimento FrontEnd utilizando Reacjs.</p>
                
                <p>Possuo conhecimento em monitoramento de SOC utilizando Zabbix onde efetuei diversas automações para integração com outros sistemas, Grafana e Prometheus, além de conhecimento no serviço de mensageria RABBITMQ, efetuando criação de automatizações e criações de microserviços com o fim de uma rapida resposta a incidentes, além disso tenho conhecimento de administração de Firewalls SonicWall, Fortigate e PFSense, alem dos pontos apresentados também possuo conhecimento em EPO´s MacAffe e Trellix.</p>
                
                <p>Para finaliza também tenho conhecimentos tanto na administração quanto criação de rotinas em Banco de dados, além disso possuo o conhecimento de gerar automatizações de ETL, e efetuando Manutenção e Criação de Querys complexas de Consultas.</p>
            </div>
            <div>
                <p>Clique em um dos temas ao lado e conheça meus projetos.</p>
            </div>
            
        </div >
    )
}

export default Apresentation