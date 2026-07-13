// Gráfico de rosca feito com SVG puro (sem biblioteca de gráficos).
//
// A ideia por trás: um círculo SVG tem uma "circunferência" (o perímetro dele).
// Usando strokeDasharray, a gente desenha só um PEDAÇO dessa borda —
// do tamanho proporcional à porcentagem de cada categoria.
// Empilhando um círculo "atrás" do outro, com strokeDashoffset deslocando
// o início de cada um, formamos as fatias da rosca.

export function GraficoDonut({ categorias, total, tamanho = 220 }) {
  const raio = tamanho / 2 - 20 // -20 pra sobrar espaço pra espessura do traço
  const circunferencia = 2 * Math.PI * raio

  // Vamos guardar, pra cada categoria, "quanto" da circunferência ela ocupa
  // e "onde" ela começa (deslocamento acumulado das fatias anteriores)
  let deslocamentoAcumulado = 0

  const fatias = categorias.map((categoria) => {
    const porcentagem = categoria.valor / total
    const tamanhoDaFatia = porcentagem * circunferencia

    const fatia = {
      ...categoria,
      tamanhoDaFatia,
      deslocamento: deslocamentoAcumulado,
    }

    deslocamentoAcumulado += tamanhoDaFatia
    return fatia
  })

  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox={`0 0 ${tamanho} ${tamanho}`}
      // Gira o SVG -90 graus pra a primeira fatia começar no topo (12h),
      // em vez de começar do lado direito (3h), que é o padrão do SVG.
      style={{ transform: 'rotate(-90deg)' }}
    >
      {fatias.map((fatia) => (
        <circle
          key={fatia.id}
          cx={tamanho / 2}
          cy={tamanho / 2}
          r={raio}
          fill="none"
          stroke={fatia.cor}
          strokeWidth={28}
          strokeDasharray={`${fatia.tamanhoDaFatia} ${circunferencia}`}
          strokeDashoffset={-fatia.deslocamento}
        />
      ))}
    </svg>
  )
}