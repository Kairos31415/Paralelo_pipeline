pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url:'https://github.com/Kairos31415/Paralelo_pipeline.git'
                        bat 'npm install'                      
                        bat 'npx cypress run npx cypress run --record --key 1e38de46-290f-4ce1-9f6a-d083174df49b --parallel'
                        
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/Kairos31415/Paralelo_pipeline.git'
                        bat 'npm install'                   
                        bat 'npx cypress run npx cypress run --record --key 1e38de46-290f-4ce1-9f6a-d083174df49b --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent1_3"
                    }
                    steps {
                        git url: 'https://github.com/Kairos31415/Paralelo_pipeline.git'
                        bat 'npm install'                      
                        bat 'npx cypress run npx cypress run --record --key 1e38de46-290f-4ce1-9f6a-d083174df49b --parallel'
                    
                    }
                
                }


            }

             
        }

    }
            
}