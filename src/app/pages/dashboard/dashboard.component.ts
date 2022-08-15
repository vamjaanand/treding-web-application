import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent
  implements OnInit {
  list: any;

  public data = [
    {
      id: '1',
      fullname: 'Anand Patel',
      time: '1:08 ',
      preview: ' I mean dare. Damn you autocorrect.',
      chat: [
        {
          message: 'hey,how are you?',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'Hey',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'What’s up? – this is an informal way to say: how are you?',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'How’s it going?',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'Hi, how are you?',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'How’s your day going?',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'Having a busy day?',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'How’s life?',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'How’s everything?',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'Sandy beach, wow!',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'Can we cook own food? Because that’s a key ingredient of any picnic',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        },
        {
          message: 'I mean dare. Damn you autocorrect.',
          timestamp: '11:15',
          createdby: 'Anand Patel',
        }
      ]
    },
    {
      id: '2',
      fullname: 'Raj Trivedi',
      time: '11:20 ',
      preview: 'Then?',

      chat: [
        {
          message: ' hello',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: ' I’m fine too. How’re you coping with Delhi’s pollution?',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: 'Air purifiers. Don’t they work well? ',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: ' More expensive? How?',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: 'Agree. Anything else on pollution masks?',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: 'What about pollution from firecrackers on Diwali?',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: 'You’ve summed the state of affairs quite well. Let’s hope things improve',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: 'Same here. What’s your plan for this weekend?',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: ' Everything is going smooth. What about you?',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: ' The location sounds exciting.',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: 'Can we cook own food? Because that’s a key ingredient of any picnic',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
        {
          message: 'Then?',
          timestamp: '11:15',
          createdby: 'Raj Trivedi',
        },
      ]
    },
    {
      id: '3',
      fullname: 'Ankit Patel',
      time: '9:56 ',
      preview: 'yahhh!!',

      chat: [
        {
          message: 'You’re right. Let’s get back to studies. Few more hard days to go.',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: ' So, did you too fail to complete the paper?',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'How did you do?',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'The paper was long, wasn’t it?',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'Thankfully, I don’t have Economics. But, yes, I’m also struggling to get enough time for revision. Anyway, we’ve to manage in whatever time we have.',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'That’s right. OK, enough of talk. Let’s get back to study. All the best for your next exam.',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'OK. Will do. How’s your preparation going on for other subjects?',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: ' Yes, I can. Where exactly in English you’re facing problem?',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'Sure. I think it’s a good idea. Can you help me with English though?',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'Mine is alright. I’m also finding chemistry to be bit challenging because of its vast syllabus and too much memorization in organic chemistry.',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'How is your preparation for the exam going on?',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'Sending resumes cold doesn’t work well. Off hand, I don’t recall a contact in your industry, but lemme try through people I know. I’ll let you know.',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'Got it. So have you been applying elsewhere?',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
        {
          message: 'yahhh!!',
          timestamp: '11:15',
          createdby: 'Ankit Patel',
        },
      ]
    },
    {
      id: '4',
      fullname: 'Rafik Khan',
      time: '2:38 ',
      preview: 'Next to my neighbor’s house',

      chat: [
        {
          message: 'You look bit down. What’s the matter?',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: 'Nothing much.',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: 'Looks like something isn’t right.',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: ' I’ve been thinking about it for a while, but haven’t concretized anything so far.',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: 'What have you been thinking, if you can share?',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: 'Your choice makes sense. So are you thinking of making the transition in near future?',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: 'You’re welcome.',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: 'Good. How’s your work going on?',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: 'Why? What happened?',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: 'Oh, I did, too. And I appreciate hearing your point of view.',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: 'You’re right about that. There wasn’t much of a story.',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: ' I agree with that. I think the author could have handled that part better. I did enjoy the descriptions, though.',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },
        {
          message: 'Next to my neighbor’s house',
          timestamp: '11:15',
          createdby: 'Rafik Khan',
        },

      ]
    },
    {
      id: '5',
      fullname: 'Radhika Patel',
      time: '3:28 ',
      preview: 'Wasup for the third time like is you blind bitch',

      chat: [
        {
          message: 'Oh no! How could she do that? It obviously was only for her.',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: 'Well, it was quite funny. But you didn’t expect her to send it to anyone.',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: ' Ah well, don’t worry. I know how you feel, though.',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: 'No no, don’t worry. He won’t. It’s not that interesting for him or anyone else, to be honest.',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: ' He won’t. But maybe ask Clare to speak to Justin… Get him to delete the photo?',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: 'Yeah, true.',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: 'Mmm… I’d just try to forget about it if I were you.',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: 'Maybe speak to Clare, tell her how you feel. She shouldn’t be sharing people’s private photos.',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: 'Good idea. And don’t worry. Just be careful and don’t send any more embarrassing photos!',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: 'Oh, really? Like what?',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: ' I can see that. It definitely seemed like he had some problems with women.',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },
        {
          message: 'Wasup for the third time like is you blind bitch',
          timestamp: '11:15',
          createdby: 'Radhika Patel',
        },

      ]
    },
    {
      id: '6',
      fullname: 'Praful patel',
      time: '12:03 ',
      preview: 'The location sounds exciting.',

      chat: [
        {
          message: 'Sure, no problem.',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: ' Well, thanks for being supportive. I appreciate it.',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: 'Are you free this weekend?',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: 'Want to see a movie?',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: ' What time should I be there?',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: 'Can I bring anything?',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: 'Can I at least bring a bottle of wine?',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: ' I’ll do that, then. Thanks for inviting me.',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: 'Are you OK? What’s the matter?',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: 'Yeah?',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: 'Well, I’m sure you did great. Good luck.',
          timestamp: '11:15',
          createdby: 'Praful patel',
        },
        {
          message: 'The location sounds exciting.',
          timestamp: '12:03',
          createdby: 'Praful patel',
        },
      ]
    },
    {
      id: '7',
      fullname: 'Atul Shah',
      time: '22:18 ',
      preview: 'Yeah, I know, I know. I won’t.',

      chat: [
        {
          message: 'How’s it going?',
          timestamp: '11:15',
          createdby: 'Atul Shah',
        },
        {
          message: 'I went back to school.',
          timestamp: '11:15',
          createdby: 'Atul Shah',
        },
        {
          message: 'What have you been up to?',
          timestamp: '11:15',
          createdby: 'Atul Shah',
        },
        {
          message: 'That sounds hard.',
          timestamp: '11:15',
          createdby: 'Atul Shah',
        },
        {
          message: 'Everyone is good. Thanks!',
          timestamp: '11:15',
          createdby: 'Atul Shah',
        },
        {
          message: 'Yeah, right over here.',
          timestamp: '11:15',
          createdby: 'Atul Shah',
        },
        {
          message: 'I’m glad we had time to meet up',
          timestamp: '13:35',
          createdby: 'Atul Shah',
        },
        {
          message: 'Me too. So, what’s going on?',
          timestamp: '13:45',
          createdby: 'Atul Shah',
        },
        {
          message: 'Oh, not much. You?',
          timestamp: '14:05',
          createdby: 'Atul Shah',
        },
        {
          message: ' Not much. Hey, how did your interview go? Wasn’t that today?',
          timestamp: '14:15',
          createdby: 'Atul Shah',
        },
        {
          message: ' Yeah, I know, I know. I won’t.',
          timestamp: '22:18',
          createdby: 'Atul Shah',
        },
        {
        id: '8',
      fullname: 'patel Deep',
      time: '2:101 ',
      preview: 'hello.',

      Chat: [
        {
          message : 'hii',
          timestamp : 'how are you',
          createby : 'patel Deep',
        }
      ]
        }
      
      ]
    }
  ]

  @Input() formgroup;
  message: any;
  messageArray: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.onPageChange();
    this.list = this.data.find(a => a.id === '3');

  }
  onPageChange() { }

  openchat(id) {
    this.list = this.data.find(a => a.id === id);
  }
  Save() {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    this.list.chat.push({ message: this.message, timestamp: time, createdby: 'me' });   
  }
  deletemessage() {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
   this.list.chat.pop({ message: this.message, timestamp: time, createdby: 'me' });  
  }
}
