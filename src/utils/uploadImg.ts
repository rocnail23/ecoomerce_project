import axiosClient from "../apis/axiosclient"
import { Img } from "../interfaces/InterfacesForm"

export const uploadImg = async(images:FileList,id:number) => {
  try {
    const imgs = []

    for(let image of images){
        const form = new FormData
        form.append("image",image)
        const {data} = await axiosClient.post<Img>(`/image/${id}`,form)
        imgs.push(data)
    }
       return imgs
  } catch (error) {
    console.log(error)
  }
}