object ReceitaFederal {
    fun calcularImposto(salario: Double): Double {
    	val aliquota = when {
            (salario >= 0 && salario <= 1100) -> 0.05
            (salario > 1100 && salario <= 2500) -> 0.10
            else -> 0.15
        }
    	return aliquota * salario
    }
}

fun main() {
   println("Salario")
   val valorSalario = readLine()!!.toDouble();
   println("Beneficios")
   val valorBeneficios = readLine()!!.toDouble();
   
   val valorImposto = ReceitaFederal.calcularImposto(valorSalario);
   val saida = valorSalario - valorImposto + valorBeneficios;
   
   println(String.format("%.2f", saida));
}