//
//  Avatar.swift
//  guessPresident
//
//  Created by Nicholas Grant on 2/24/20.
//  Copyright © 2020 nicholasgrant. All rights reserved.
//

import Foundation
import SwiftUI

struct Avatar: View {
    @Binding var position: CGPoint
    
    // A variable that keeps the current location before dragging starts.
    @State var offsetBeforeStartOfDrag = CGPoint()
    
    var body: some View {
        // Setup drag gesture. Will update binding position.
        let drag = DragGesture(minimumDistance: 0.0, coordinateSpace: CoordinateSpace.global)
            .onChanged { gesture in
                // Update position on drag.
                self.position = CGPoint(x: self.offsetBeforeStartOfDrag.x + gesture.translation.width,
                                        y: self.offsetBeforeStartOfDrag.y + gesture.translation.height)
            }
            .onEnded { gesture in
                // Remember offset when touch ended.
                self.offsetBeforeStartOfDrag = self.position
            }
        
        return ZStack {
            Image("eagle")
            .resizable()
                .frame(width: 100, height: 100)
        }
        .frame(width: 50, height: 50)
        .position(position)
        .animation(.easeInOut(duration: 0.2))
        .gesture(drag)
        .onAppear() {
            // Initialize offset on appear.
            self.offsetBeforeStartOfDrag = self.position
        }
    }
}

struct Avatar_Previews: PreviewProvider {
    static var previews: some View {
        GeometryReader { geometry in
            Avatar(position: .constant(CGPoint(x: geometry.size.width / 2, y:  geometry.size.height / 2)))
        }
    }
}
