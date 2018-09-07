<template>
<body>
<div>
	<div class="überschrift">
  <div class="title" v-bind:style="{'background-position': x*10 + '%' + y*10 + '%' }">JUSTIN SPRING</div>
  <div class="subtitle"  v-bind:style="{'background-position': y*15 + '%' + x*15 + '%' }"> smart + curious + nerd + ingenious + 
innovative = ME </div>
</div>
   <div class="container"   @mousemove="getPosition">
	   
      <div class="overall-container" >
		  
         <div class="inside-container"  v-bind:style="{ transform: ' perspective(1000px) '+ 'rotateY('+x+'deg) rotateX('+y+'deg)'}" >
            <div class="grid">
				<a @click="redirect('/aboutMe')">
               <figure class="effect-chico">
                  <img src="../../assets/picture/18.jpg" alt="img15"/>
                  <figcaption>
                     <h2>{{this.data[0].aboutMe.title}}</h2>
                     <p>{{this.data[0].aboutMe.description}}</p>
               
                  </figcaption>
               </figure>
			   </a>
            </div>
            <div class="grid">
				<a  @click="redirect('/')">
               <figure class="effect-chico">
                  <img src="../../assets/picture/33.jpg" alt="img15"/>
                  <figcaption>
                     <h2>{{this.data[0].projects.title}} <span></span></h2>
                     <p>{{this.data[0].projects.description}}</p>
                   
                  </figcaption>
               </figure>
			   </a>
            </div>
            <div class="grid">
              <a @click="redirect('/')">
               <figure class="effect-chico">
                  <img src="../../assets/picture/4.jpg" alt="img15"/>
                  <figcaption>
                     <h2><span>{{this.data[0].hobby.title}} </span></h2>
                     <p>{{this.data[0].hobby.description}}</p>
                    
                  </figcaption>
               </figure>
               </a>
            </div>
            <div class="grid">
                <a @click="redirect('/')">
               <figure class="effect-chico">
                  <img src="../../assets/picture/21.jpg" alt="img15"/>
                  <figcaption>
                     <h2>Silly <span>Chico</span></h2>
                     <p>Chico's main fear was missing the morning bus.</p>
                  
                  </figcaption>
               </figure>
               </a>
            </div>
            <div class="grid">
              <a @click="redirect('/')">
               <figure class="effect-chico">
                  <img src="../../assets/picture/19.jpg" alt="img15"/>
                  <figcaption>
                     <h2>Silly <span>Chico</span></h2>
                     <p>Chico's main fear was missing the morning bus.</p>
                     
                  </figcaption>
               </figure>
               </a>
            </div>
            <div class="grid">
				<a @click="redirect('/')">
               <figure class="effect-chico">
                  <img src="../../assets/picture/33.jpg" alt="img15"/>
                  <figcaption>
                     <h2>Silly <span>Chico</span></h2>
                     <p>Chico's main fear was missing the morning bus.</p>
                  </figcaption>
               </figure>
			    </a>
            </div>
         </div>
      </div>
   </div>
   </div>
   </body>
</template>

<script src="./Home.js">
</script>
<style src="./Home.scss" lang="scss" scoped></style>