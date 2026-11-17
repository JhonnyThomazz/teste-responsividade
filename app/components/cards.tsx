'use client';

export default function Cards() {
    return(
        <div data-cy="container-produtos" className="flex flex-col md:flex-row p-4 gap-4">
            <div data-cy="produto-1" className="bg-black-500 p-8 text-white text-center rounded">
                Produto_01
            </div>
            <div data-cy="produto-2" className="bg-red-500 p-8 text-white text-center rounded">
                Produto_02
            </div>
            <div data-cy="produto-3" className="bg-yellow-500 p-8 text-white text-center rounded">
                Produto_03
            </div>
                       
        </div>
    );
}