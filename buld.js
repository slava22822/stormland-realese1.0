const copytextelement = document.querySelectorAll('.copy')
    copytextelement.forEach(Element => {
        Element.addEventListener('click',async() => {
            const textcopy = Element.dataset.text;
            
            try{
                await navigator.clipboard.writeText(textcopy)
                console.log('Текст скопирован..')
            } catch (err){
                console.error('Не получилось скопировать текст!', err)
            }
        })
    })