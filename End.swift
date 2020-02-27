import SwiftUI

struct End: View {
    @Binding var isPresented: Bool
    
    var score: Int
    
    func render() -> AnyView {
        if isPresented == true {
            return AnyView(ZStack {
             LinearGradient(gradient: Gradient(colors: [.red, .white, .blue]), startPoint: .top, endPoint: .bottom).edgesIgnoringSafeArea(.all)
                
                VStack {
                  Spacer()
                    VStack {

                        Text("Congratulations, you have \(score)/10 correct")
                        .font(.custom("American Typewriter", size: 35))
                        .multilineTextAlignment(.center)
                             .foregroundColor(.white)
                    }
                    Spacer()
                    Spacer()
                    Spacer()
                    Spacer()
                    Spacer()
                    Button(action:  {
                        self.isPresented = false

                    }) {
                        Text("Start a new round")
                        .font(.custom("American Typewriter", size: 20))
                        .padding()
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .padding()
                        .border(Color.blue, width: 5)
                    }
                    Spacer()
                }
            })
        } else {
            return AnyView(EmptyView())
        }
    }
    
    var body: some View {
        render()
    }
    
    
    

}

struct End_Previews: PreviewProvider {
    static var previews: some View {
        End(isPresented: .constant(true), score: 0)
    }
}
