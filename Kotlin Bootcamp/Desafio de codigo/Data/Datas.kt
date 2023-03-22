fun main() {
    println("Data")
    val entrada: String? = readLine()
  
    val (dia, mes, ano) = entrada!!.split("/")
    
    val mesPorExtenso = when (mes.toInt()) {
        1 -> "Janeiro"
        2 -> "Fevereiro"
        3 -> "Março"
        4 -> "Abril"
        5 -> "Maio"
        6 -> "Junho"
        7 -> "Julho"
        8 -> "Agosto"
        9 -> "Setembro"
        10 -> "Outubro"
        11 -> "Novenbro"
        12 -> "Dezenbro"
        else -> "Mês inválido!"
    }


    println("${dia} de ${mesPorExtenso} de ${ano}")
}