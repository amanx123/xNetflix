
import useBillboard from "@/hooks/useBillboard"

const BillBoard = () => {
    const { data } = useBillboard();
    console.log(data)
    return (
        <div>

        </div>
    )
}
export default BillBoard