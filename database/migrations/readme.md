- Se puede agregar una **clave primaria compuesta** (más de una PK)
    - Aplicando la propiedad ******************`primaryKey`****************** a true en las columnas que necesitamos que formen la clave primaria
    
    ```jsx
    				//en la migración, en la función correspondiente que creará la tabla
    				field_id: {
              type: Sequelize.UUID,   // En el caso de que sea FK
              allowNull: false,       // hay que listar los attbs neceesarios
              foreignKey: true,
              primaryKey: true,  //  ---> primary key
              references: {
                model: 'table-name',
                key: 'id'
              },
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
            },
            field2_id: {
              type: Sequelize.UUID,
              allowNull: false,
              primaryKey: true,  // ---> primary key
            },
    ```
    
    - Usando la función **`addConstraint`** en la migración indicando los campos a ser PKs
        
        Al hacerlo de esta manera, se tiene que cuidar el nombrado de la constraint para evitar que en un futuro colisione con otra constraint
        
        `name`: table_name + pkey     (Como es pkey, se omiten los campos)
        
        *Nota: Cuando usan Postgres, pueden ver todos los Indexes en la respectiva carpeta y encontrar la constraint con su nombre. O en la tabla creada, pueden listar todos los Contraints*