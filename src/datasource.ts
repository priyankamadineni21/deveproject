import {ormConfig} from "./ormconfig"
import {DataSource} from "typeorm"

const datasource = (async () => {
    return new Promise((resolve, reject) => {
        resolve(new DataSource(ormConfig))
    })
})()

export default datasource
