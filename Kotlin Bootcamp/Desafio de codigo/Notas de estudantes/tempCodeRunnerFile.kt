    do{
            println("Informe a media do estudante:")
            val media = readLine()!!.toDouble();
            if (media < 5){
                println("REP")
            }
            else if (media >= 5 && media < 7){
                println("REC")
            }
            else if (media > 7){
                println("APR")
            }
        }