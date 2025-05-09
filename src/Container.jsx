import css from './Container.module.css'

const Container =(props)=>{
  return <div className={css.container}>{props.children}</div>
}
export default Container;
// Props are like function arguments, but for components.
// Wo data hote hain jo aap ek component se doosre component ko bhejte ho.

// 💬 Soch lijiye props.children ek "jagah" hai jahan aap kisi bhi cheez ko "andar" daal sakte ho — aur component usse pyaar se sambhalta hai 💖

// Aapne Container component ke andar kuch bhi likha – and that becomes props.children

// props.children is like a placeholder for any content 