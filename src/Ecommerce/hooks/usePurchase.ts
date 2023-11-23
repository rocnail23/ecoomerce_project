import axiosClient from "../../apis/axiosclient"
import { Purchase } from "../../interfaces/InterfacesForm"
import { useAppDispatch } from "../../store/hooks/redux-hooks"
import { setPurchase } from "../../store/slices/purchase.slice"

export const usePurchase = () => {

    const dispatch = useAppDispatch()

    const startSetPurchase = (purchases:Purchase[]) => {

        dispatch(setPurchase(purchases))

    }

    const getPurchase = async() => {
        try {
            const {data} = await axiosClient<Purchase[]>("/purchase")
            dispatch(setPurchase(data))
        } catch (error) {
            console.log(error)
        }
    }

    return{
        startSetPurchase,
        getPurchase
    }

}