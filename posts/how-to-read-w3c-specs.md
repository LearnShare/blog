How to Read W3C Specs
===================

by J. DAVID EISENBERG September 28, 2001

Published in CSS, HTML

The World Wide Web Consortium (W3C) is the keeper of the specifications for all the technologies on the web.  As a web designer, you might have visited their site (w3.org) to find the answer to a question about XHTML, or to find out more about a new technology like XSL Formatting Objects or Scalable Vector Graphics.

So you go to the specification, and almost immediately retreat in utter confusion.  “This,” you think, “is totally unreadable.”  Actually, it is readable—if you know one key piece of information.

A SPECIFICATION IS NOT A USER MANUAL

>The Bible was not meant to be read, but interpreted.—attribution unknown

When you seek answers, you’re looking for a user manual or user reference guide; you want to use the technology. That’s not the purpose of a W3C specification.  The purpose of a “spec” is to tell programmers who will implement the technology what features it must have, and how they are to be implemented.

It’s the difference between the owner’s manual for your car and the repair manuals. The owner’s manual tells you how to replace the windshield wiper blades. If you go to the repair manual, it will tell you the dimensions of the blades and show the parts used to attach them; you will have to use that information to piece together how to replace them.

If you’re working with the latest technology, there may not be any user reference material at all; the only documentation available is the specification. In such a case, learning to read the spec is a necessity, not a luxury.

THE STRUCTURE OF SPECIFICATIONS

Just as a repair manual might have a guide to abbreviations and legends used in the diagrams, most W3C specifications have a section that explains the document itself. For example, section 1 of the HTML and CSS specifications provides decent information on how each spec is put together, and on how to read that spec.

WORDS FOR THE WISE

>I hate definitions.—Benjamin Disraeli

A repair manual is written with precision in mind rather than as a breezy, informal dialog with the reader. Similarly, a W3C spec is written with all the ritualized formality of a Japanese Kabuki play. Here are some words that you will encounter as you read a spec.

normative

The words, “this section is normative” indicate that you are about to read details that specify what implementors should conform to. Informative sections, on the other hand, usually consist of examples and explanations.

user agent

A fancy word for the program that users will employ to access the technology. For HTML, that would be a browser. For Scalable Vector Graphics (SVG), that might be a viewer program like Batik or a plug-in like Adobe’s SVG viewer.

RFC

Request For Comment, a document that embodies an internet standard.

helping verbs

If a specification says that it follows RFC2119, then certain helping verbs take on formal meaning. must means that a definition is an absolute requirement, must not means that a definition is an absolute prohibition, should means that a feature can be implemented or not, but you’d better have a really good reason if you don’t, and should not means you’d better have a really good reason if you do include a feature.

SKIM

>Dear Aunt Martha: Thank you for the book on elephants. It told me more about elephants than I wanted to know.—A child’s thank-you letter

You don’t have to read every single word of a specification. If you find yourself in an area with no tags at all, but lots of verbiage that sounds like legalese, computer science talk, or both, a brief glance may be all that’s needed.

Something like the following section of the XSL:FO specification is eminently skippable. (In fact, in that specification, the material you will need as a user doesn’t begin in earnest until chapter six.)

>4.2.5 Stacking Constraints

>This section defines the notion of block-stacking constraints and inline-stacking constraints involving areas. These are defined as ordered relations, i.e., if A and B have a stacking constraint it does not necessarily mean that…

>Hey! Are you ready to skim yet?!

On the other hand, there are times when you should slow down. If you see an illustration, look at the labels and/or callouts. They will usually refer to important information. When you see a section with an example or examples, slow down and read it carefully.

NAMESPACES

In the XML world, a namespace is a mechanism that lets you mix different markups in the same document.  For example, if I wanted to put Math Markup Language inside an HTML document, I’d have to put some extra declarations in the topmost element of my document, and I’d mark the math elements by prefixing them with ml:

	Here is Einstein’s famous equation:
		e  
			=  
		m  
		c  
		2
	with which we all are familiar.

Your best bet is to follow any namespace prefixes that you see in sample documents. In most cases, if you encounter a long discussion of how a certain XML technology is “namespace-aware,” you may safely skip it.

LEARN TO READ BNF

BNF stands for Backus Naur Form, or Backus Normal Form. It’s a compact way to represent the grammar of computer languages, and it’s been around, well, forever. Different specifications use different flavors of BNF, but they all translate long English descriptions into symbolic form.  Take this example of what constitutes a sandwich:

>A sandwich consists of a lower slice of bread, 
mustard or mayonnaise; optional lettuce,
an optional slice of tomato; two to four slices of
either bologna, salami, or ham (in any combination);
one or more slices of cheese, and a top slice of bread.

This translates to:

	sandwich ::=
	    lower_slice 
	    [ mustard | mayonnaise ]
	    lettuce? tomato?
	    [ bologna | salami | ham ] {2,4}
	    cheese+
	    top_slice

The constituent parts of a definition are listed in order, separated by blanks.  Items are grouped with square brackets, and choices within a group are separated by a vertical bar.

If an item is followed by a question mark, that means “one or none;” if followed by a plus sign, that means “one or more;” if followed by an asterisk, that means “zero or more;” and if followed by numbers inside braces, it gives the lower and upper limits for how many times an item can occur.

Parentheses, or more square brackets, are used to group items in more complex definitions.  Sometimes a generic item (like a “color”) is enclosed in `<` and `>`, or fixed items will be enclosed in quote marks.

LEARN TO READ A DOCUMENT TYPE DEFINITION

>The Grolier Encyclopedia® is the source authority for all answers and questions asked on Jeopardy®.—Credit on TV game show

You know those declarations that you put in your documents to tell the browser which version of HTML or XHTML you’re using? Those declarations refer to a Document Type Definition, or DTD, which defines which combinations of elements are legal in a document.

While learning to read a DTD is difficult, it’s not an impossible task.  And it’s worth learning, because the DTD is the ultimate authority for what is and is not syntactically correct for a particular markup language.

A full explanation of how to read a DTD is well beyond the scope of this article, but it can be found in Elizabeth Castro’s XML for the World Wide Web Visual Quickstart Guide, or in Erik Ray’s Learning XML. Here’s a brief example of something you might see in a DTD:





And here’s what it means in English:

>The font style elements are , , and .  Inline elements consist of text or font style elements.  A  
can contain one or more  
or inline elements in any order.  A  
has an optional align attribute with values of left, right, or center.

IDLE PAST IDL, BE BOUND BY BINDINGS

Some XML technologies, such as SVG and SMIL, allow a user to write programs to control a document dynamically, much as JavaScript lets you control an HTML document. Their specifications will have sections that describe how scripts work with the Document Object Model. These sections show the interfaces in IDL, the Interface Definition Language.

IDL is a generic notation for describing the kinds of information that a user agent should make accessible to a programming environment. IDL is not a programming language; it’s a notation for describing these interfaces in a compact way.  While informative, the IDL interface definitions are almost certainly not what you are looking for.

What you probably want, depending upon your programming language of choice, is the Java bindings or ECMAScript bindings.

Bindings is a fancy term for the list of objects, properties, and methods that are available to your scripts.  ECMAScript is the European Computer Manufacturer’s Association standard version of JavaScript.

If you’re using some other language like Perl or Python, you’ll have to look for a library from some place like the Comprehensive Perl Archive Network or the Python XML Special Interest Group.

Summary

1. Realize that W3C specifications are written for implementers, not end users.
2. Many specifications contain a section that tells how they are organized and how you should read them.
3. Know the vocabulary that specifications use.
4. Remember that you don’t have to read every word. Skim for the parts that make sense.
5. Avoid discussions of namespaces.
6. Learn to read BNF — it’s used in lots of places.
7. Learn to read a DTD for answers to syntax questions.
8. If a technology is scriptable, the information is in the bindings.Be patient and persistent, and you’ll be amazed at the amount of information you too can extract from a W3C specification.
9. 
About the Author

J. David Eisenberg

J. David Eisenberg is a programmer and teacher living in San Jose, CA with his cats, Marco Polo and Big Tony. He has written a book about Scalable Vector Graphics. He is also interested in the OpenDocument Format and foreign language learning.

MORE FROM THIS AUTHOR

Get Ready for HTML 5 DOM Design Tricks DOM Design Tricks III: Using Events in the Document Object Model DOM Design Tricks II