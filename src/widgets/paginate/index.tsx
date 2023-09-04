/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
    onChange : (e : any) => any,
    page? : number,
    numOfPages : number
}
export default function Pagination({
    onChange,
    page,
    numOfPages
} : PaginationProps) {

    return <ReactPaginate
        breakLabel="..."
        nextLabel={
            <h1 className='flex text-sm items-center rounded-md p-1 lg:ml-48 cursor-pointer'>Next <AiOutlineArrowRight color="#233D4D" size={17} className="ml-2"/></h1>
        }
        onPageChange={onChange}
        pageRangeDisplayed={1}
        pageCount={numOfPages}
        previousLabel={
            <h1 className='flex text-sm items-center rounded-md p-1 lg:mr-48 cursor-pointer'><AiOutlineArrowLeft color='#233D4D' className="mr-2" size={17}/> Prev </h1>
        }
        activeClassName='bg-[#F9FAFB] text-[#1D2939] rounded-full p-3'
        pageClassName=' px-5'
        breakClassName='px-2'
        className='flex border-t border-[#EAECF0] pt-5 justify-center items-center'
        forcePage={page}
        // renderOnZeroPageCount={null}
    />
}