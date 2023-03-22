fun main() {
    println("Informe media estudante:")
    val mediaE = readLine()!!.toDouble();

    when (mediaE) {
         in 0.0..4.9 -> println("REP")
         in 5.0..6.9 -> println("REC")
         in 7.0..10.0 -> println("APR")
    }
}