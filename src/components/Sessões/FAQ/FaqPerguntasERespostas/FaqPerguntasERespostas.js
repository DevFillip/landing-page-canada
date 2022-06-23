import Faq from "../Faq";

function FaqPerguntasERespostas(){
    const questionsAnswers = [
        {
          question: "Até quando posso fazer a inscrição?",
          answer:
            "Até dia 01/06/2022",
        },
        {
          question: "Quais são as formas de pagamento?",
          answer:
            "Quais são as formas de pagamento?",
        },
        {
          question: "Quem pode ir?",
          answer: `Participantes entre 10 e 19 anos`,
        },
        {
          question: "Qual a data de partida e de chegada?",
          answer: `Ida: 04/07/2022

          Volta: 18/07/2022`,
        },
        {
          question: "O que está incluso no valor de C$ 3700?",
          answer: `
          Hospedagem na residência estudantil da William Academy;
          3 refeições por dia
          (exceto duas refeições em Toronto e nas Cataratas do Niágara);
          Curso de inglês avançado;
          Atividades dentro e fora da instituição;
          Seguro saúde;
          Translado;
          Taxa de inscrição; Certificado de participação;
          Moletom College Prep.`,
        },
        {
            question: "A passagem está inclusa no valor?",
            answer: "Por conta da variação dos preços das passagens aéreas, elas serão fechadas separadamente.",
        },
      ];

      <Faq questionsAnswers={questionsAnswers} />
}

export default FaqPerguntasERespostas