import axios from "axios"
import { API } from "../../services/utils/constants"
import { toast } from "react-toastify"

export function clientAPI (options: {
    method: 'POST' | 'GET' | 'PUT' | 'DELETE'
    path: string
    parameters?: any
    data?: any
}) {        
    switch (options.method) {
     
        case 'GET':
            return async () => {
                try {
                    let url = `${API}/${options.path}?`
 
                    if (options?.parameters)
                        for (const [key, value] of Object.entries(options?.parameters)) 
                            url+=`${key}=${value}&`
        
                    const response = await axios.get(
                        url, 
                        { withCredentials: true }
                    )
     
                    return response.data
                } catch (e) {
                    console.log('ERORR: request GET')
                    return []
                }
            }
     
        case 'POST': 
            return async () => {
                try {
                    const url = `${API}/${options.path}`
                    const response = await axios.post(
                        url,
                        options.data, 
                        {
                            headers: {
                                    'Content-Type': 'application/json'
                            },
                            withCredentials: true
                        }
                    )

                    if (!response) 
                        return false

                    toast.success(response.data?.message)
                    return response.data
                } catch (e: any) {
                    toast.error(e.response.data?.message.join(','))
                    return false
                }
            }
        
        default:
            return () => ''
    }
}

 
  

 