
import Blogsample from './blogsample'
import plate from "../../assets/plate.png";
import image from "../../assets/Image.png";
import image1 from "../../assets/Image-1.png";
import image2 from "../../assets/Image-2.png";
import image3 from "../../assets/Image-3.png";
import image4 from "../../assets/Image-4.png";
import image5 from "../../assets/Image-5.png";
import image6 from "../../assets/Image-6.png"
import image7 from "../../assets/Image-7.png"
import image8 from "../../assets/Image-8.png"
import image9 from "../../assets/Image-9.png"
import image10 from "../../assets/Image-10.png"

const Displayblog = () => {
  return (
    <div>
         <div className="flex flex-row justify-between px-[100px]">
        <div>
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px] pl-[40px] mt-[100px] rounded-tl-[30px] border-[#828d65] border-[0.1px]"
          pic={plate}
            blogh="Weight Loss Tips"
            desch="10 Effective Strategies for Sustainable Weight Loss"
            ph="Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes."
          />
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px] pl-[40px] border-[#828d65] border-[0.1px]"
          pic={image1}
            blogh="Weight Loss Tips"
            desch="Understanding Emotional Eating and How to Overcome It"
            ph="Explore the connection between emotions and eating habits. Get valuable insights on how to identify emotional triggers and develop healthier coping mechanisms."
          />
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px] pl-[40px] border-[#828d65] border-[0.1px]"
          pic={image3}
            blogh="Healthy Eating"
            desch="The Benefits of a Plant-Based Diet for Overall Health"
            ph="Explore the advantages of adopting a plant-based diet. Learn about the potential health benefits, nutrient-rich plant-based foods, and tips for transitioning to a plant-based lifestyle."
          />
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px] pl-[40px] border-[#828d65] border-[0.1px]"
          pic={image5}
            blogh="Fitness and Exercise"
            desch="Cardio vs. Strength Training: Which Is Better for Weight Loss?"
            ph="Explore the benefits of both cardio and strength training exercises for weight loss. Find out how to combine them effectively to maximize your results."
          />
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px] pl-[40px] border-[#828d65] border-[0.1px]"
          pic={image7}
            blogh="Mindset and Motivation"
            desch="Developing a Positive Body Image and Self-Confidence"
            ph="Explore techniques for cultivating a positive body image and improving self-confidence. Learn how to embrace your body and appreciate your unique qualities."
          />
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px]  rounded-bl-[30px] pl-[40px] border-[#828d65] border-[0.1px]"
          pic={image9}
            blogh="Recipes and Meal Planning"
            desch="Healthy and Flavorful Lunch Ideas for a Busy Lifestyle"
            ph="Discover a variety of tasty and nutritious lunch options that are perfect for those with busy schedules. These recipes are quick to make and packed with essential nutrients."
          />
        </div>
        <div>
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px] mt-[100px] pl-[40px] rounded-tr-[30px] border-[#d3d3d3] border-[0.1px]"
          pic={image}
            blogh="Weight Loss Tips"
            desch="The Role of Portion Control in Weight Management"
            ph="Learn how portion control can help you manage your weight effectively. Find practical tips for controlling portion sizes and avoiding overeating."
          />
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px] pl-[40px] border-[#828d65] border-[0.1px]"
          pic={image2}
            blogh="Weight Loss Tips"
            desch="How to Stay Motivated on Your Weight Loss Journey"
            ph="Find effective strategies to stay motivated and overcome obstacles during your weight loss journey. Get tips on setting realistic goals, tracking progress, and celebrating achievements."
          />
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px] pl-[40px] border-[#828d65] border-[0.1px]"
          pic={image4}
            blogh="Healthy Eating"
            desch="Understanding Macronutrients: Carbohydrates, Proteins, and Fats"
            ph="Get a comprehensive overview of macronutrients and their role in a balanced diet. Discover the best sources of each macronutrient and how to incorporate them into your meals."
          />
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px] pl-[40px] border-[#828d65] border-[0.1px]"
          pic={image6}
            blogh="Fitness and Exercise"
            desch="Building a Home Workout Routine: Tips and Best Practices"
            ph="Discover how to create an effective workout routine at home. Learn about equipment options, exercise techniques, and ways to stay motivated."
          />
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] h-[532px] pl-[40px] border-[#828d65] border-[0.1px]"
          pic={image8}
            blogh="Mindset and Motivation"
            desch="Overcoming Self-Sabotage in Your Weight Loss Journey"
            ph="Identify self-sabotaging behaviors and learn strategies to overcome them. Discover how to shift your mindset and develop healthier habits."
          />
          <Blogsample
          cla="bg-[#F6FBE9] w-[610px] mb-[100px] rounded-br-[30px] h-[532px] pl-[40px] border-[#828d65] border-[0.01px]"
          pic={image10}
            blogh="Recipes and Meal Planning"
            desch="Satisfying and Nutritious Dinner Recipes for Weight Loss"
            ph="Find a collection of flavorful dinner recipes that are both satisfying and supportive of your weight loss goals. These recipes are designed to be healthy and delicious."
          />
        </div>
      </div>
    </div>
  )
}

export default Displayblog